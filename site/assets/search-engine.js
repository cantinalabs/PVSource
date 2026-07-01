/* ============================================================
   PVSearch — a custom natural-language search engine
   BM25 ranking over a build-time inverted index, with a light
   stemmer (mirrored in the Python builder), domain synonym
   expansion, and question / intent handling.
   Exposes: window.PVSearch.search(query, limit)
   ============================================================ */
(function(){
  "use strict";
  var W = (typeof window !== 'undefined') ? window : globalThis;

  /* ---- light stemmer (MUST match the Python builder exactly) ---- */
  var RULES = [
    ["izations",""],["ization",""],
    ["ational",""],["ations",""],["ation",""],["ating",""],["ative",""],["ate",""],
    ["ements",""],["ement",""],["ments",""],["ment",""],
    ["ousness",""],["iveness",""],["fulness",""],["ness",""],
    ["ingly",""],["edly",""],["fully",""],
    ["ings",""],["ing",""],
    ["ies","y"],["ied","y"],["iest","y"],["ier","y"],
    ["sses","ss"],["ches","ch"],["shes","sh"],["xes","x"],
    ["es",""],["ed",""],
    ["ers",""],["er",""],["ors",""],["or",""],
    ["ally",""],["ly",""],
    ["s",""],
    ["e",""]
  ];
  function stem(w){
    w = w.toLowerCase();
    if(w.length <= 3) return w;
    for(var i=0;i<RULES.length;i++){
      var suf = RULES[i][0], rep = RULES[i][1];
      if(w.length > suf.length && w.slice(w.length - suf.length) === suf){
        var keepBase = w.length - suf.length;
        if(keepBase >= 3) return w.slice(0, keepBase) + rep;
      }
    }
    return w;
  }

  /* ---- stopwords (content + question words) ---- */
  var STOP = {};
  ("a an the of to in for and or on at is are was were be been being this that these those with as by from it its their our your you i we " +
   "what whats which who whom how when where why whose do does did done can could should would will shall may might must " +
   "me my mine us about into onto over under than then so such not no yes if but also there here have has had get got " +
   "explain define definition meaning mean tell show give list want need know about vs versus between each per any all some " +
   "im whats lets let s t re ve ll d m").split(" ").forEach(function(x){ if(x) STOP[x]=1; });

  /* words that are stopwords for scoring but reveal INTENT */
  var DEFINE_WORDS = {what:1,whats:1,define:1,definition:1,meaning:1,mean:1,is:1,are:1,explain:1};
  var HOWTO_WORDS  = {how:1,calculate:1,calc:1,compute:1,size:1,sizing:1,formula:1,figure:1,determine:1,work:1,works:1};

  /* ---- domain synonym / acronym expansion (raw tokens) ---- */
  var SYN = {
    pv:["photovoltaic","solar"], photovoltaic:["pv","solar","module"],
    panel:["module"], panels:["module"], module:["panel"], modules:["panel"], cell:["module"],
    invert:["inverter"], inverter:["microinverter"], inverters:["microinverter"],
    battery:["storage","bess"], batteries:["storage","bess"], storage:["battery","bess"], bess:["battery","storage"],
    itc:["investment","tax","credit"], ptc:["production","tax","credit"],
    macrs:["depreciation"], depreciation:["macrs","bonus"],
    ocpd:["overcurrent","fuse","breaker"], overcurrent:["ocpd","fuse"], fuse:["overcurrent"], breaker:["overcurrent"],
    nec:["code","electrical"], ahj:["authority","jurisdiction","inspector"],
    mppt:["maximum","power","point","tracking"],
    gcr:["ground","coverage","ratio"], ilr:["dc","ac","ratio","clipping"],
    nem:["net","metering"], netmetering:["nem"],
    rec:["renewable","energy","certificate"], srec:["rec","certificate"],
    ev:["electric","vehicle","charging"], evse:["charger","charging","ev"],
    vpp:["virtual","power","plant"], ppa:["power","purchase","agreement"],
    soiling:["soil","cleaning","dirt","dust"],
    voc:["voltage","open","circuit"], isc:["current","short","circuit"],
    vmp:["voltage","maximum"], imp:["current","maximum"],
    ac:["alternating"], dc:["direct"],
    hoa:["association","homeowner"], reap:["usda","grant","rural"],
    smart:["massachusetts"], vder:["york","value","stack"], susi:["jersey"],
    obbba:["beautiful","bill"], conduit:["raceway","pipe"], conductor:["wire","cable"],
    azimuth:["orientation","direction"], tilt:["angle","pitch"],
    tracker:["tracking"], bifacial:["albedo"], scada:["control","monitoring"],
    interconnection:["interconnect"], commissioning:["commission","startup"],
    troubleshoot:["troubleshooting","fault","diagnose"], maintenance:["maintain"],
    rapid:["shutdown"], shutdown:["rapid"], grounding:["bonding","ground","egc"],
    carport:["canopy"], canopy:["carport"], utility:["utilityscale"],
    repower:["repowering","decommission","recycling"]
  };

  function tokenize(s){
    var m = s.toLowerCase().match(/[a-z0-9]+/g);
    return m || [];
  }

  function buildQuery(query){
    var raw = tokenize(query);
    var intentDefine = false, intentHowto = false;
    raw.forEach(function(t){
      if(DEFINE_WORDS[t]) intentDefine = true;
      if(HOWTO_WORDS[t]) intentHowto = true;
    });
    // weighted term map: stem -> weight
    var terms = {};
    function add(tok, w){
      if(tok.length < 2 || STOP[tok]) return;
      var s = stem(tok);
      if(s.length < 2) return;
      if(!terms[s] || terms[s] < w) terms[s] = w;
    }
    raw.forEach(function(t){
      if(STOP[t]) {
        // still allow howto content words like "calculate"/"size" to score
        if(HOWTO_WORDS[t] && t!=="how" && t!=="work" && t!=="works"){ add(t, 0.7); }
        return;
      }
      add(t, 1.0);
      var ex = SYN[t];
      if(ex) ex.forEach(function(e){ add(e, 0.45); });
    });
    return { terms: terms, define: intentDefine, howto: intentHowto, raw: raw };
  }

  /* cache stemmed heading tokens per doc */
  var headStems = null;
  function ensureHead(D){
    if(headStems) return;
    headStems = D.docs.map(function(d){
      var set = {};
      tokenize(d.h).forEach(function(t){ if(!STOP[t]) set[stem(t)] = 1; });
      return set;
    });
  }

  var K1 = 1.5, B = 0.75;

  // scope name -> set of doc badges it includes
  var SCOPES = {
    Fundamentals: ["Fundamentals","Calculations","Reference","Software","Codes"],
    Grid: ["Grid"],
    "Build It Yourself": ["DIY"],
    Residential: ["Residential"],
    Commercial: ["Commercial"],
    "Utility-Scale": ["Utility"],
    "O&M": ["O&M"],
    Incentives: ["Federal","State","OBBBA","Title 24","IL Shines","Depreciation","USDA","Direct Pay",
                 "Transfer","Bonus","New York","Massachusetts","New Jersey","SREC","States"]
  };
  function scopeBadges(scope){
    if(!scope || scope === "All") return null;
    var arr = SCOPES[scope]; if(!arr) return null;
    var set = {}; arr.forEach(function(b){ set[b] = 1; }); return set;
  }

  function search(query, limit, scope){
    var D = W.SEARCH_DATA;
    if(!D || !query) return [];
    ensureHead(D);
    var allow = scopeBadges(scope);
    var q = buildQuery(query);
    var qterms = Object.keys(q.terms);
    if(!qterms.length) return [];
    var N = D.N, avgdl = D.avgdl || 1;
    var scores = {};

    qterms.forEach(function(t){
      var postings = D.post[t];
      if(!postings) return;
      var df = postings.length;
      var idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
      var wq = q.terms[t];
      for(var j=0;j<postings.length;j++){
        var id = postings[j][0], tf = postings[j][1];
        var dl = D.len[id] || avgdl;
        var denom = tf + K1 * (1 - B + B * dl / avgdl);
        var s = idf * (tf * (K1 + 1)) / denom * wq;
        // heading boost
        if(headStems[id][t]) s += idf * 0.9 * wq;
        scores[id] = (scores[id] || 0) + s;
      }
    });

    var ids = Object.keys(scores);
    if(allow) ids = ids.filter(function(id){ return allow[D.docs[id].d]; });
    if(!ids.length) return [];

    // intent adjustments
    ids.forEach(function(id){
      var doc = D.docs[id];
      if(q.define && doc.d === "Reference") scores[id] *= 1.25;       // glossary for "what is…"
      if(q.howto && /calc|formula|sizing|size/i.test(doc.h)) scores[id] *= 1.18;
    });

    ids.sort(function(a,b){ return scores[b] - scores[a]; });
    ids = ids.slice(0, limit || 24);

    return ids.map(function(id){
      var doc = D.docs[id];
      return { d: doc.d, h: doc.h, u: doc.u, snippet: makeSnippet(doc.t, q.terms) };
    });
  }

  function escapeHtml(s){ return s.replace(/[<>&]/g, function(c){ return {'<':'&lt;','>':'&gt;','&':'&amp;'}[c]; }); }

  function makeSnippet(text, termSet){
    if(!text) return "";
    var lower = text.toLowerCase();
    // find first matching token position
    var re = /[a-z0-9]+/g, m, firstIdx = -1;
    while((m = re.exec(lower)) !== null){
      if(termSet[stem(m[0])] !== undefined){ firstIdx = m.index; break; }
    }
    var start = 0;
    if(firstIdx > 90) start = firstIdx - 70;
    var slice = text.slice(start, start + 230);
    if(start > 0) slice = "…" + slice;
    if(start + 230 < text.length) slice = slice + "…";
    slice = escapeHtml(slice);
    // highlight matching tokens
    slice = slice.replace(/[A-Za-z0-9]+/g, function(w){
      return (termSet[stem(w)] !== undefined) ? "<mark>" + w + "</mark>" : w;
    });
    return slice;
  }

  /* ---------- related pages (tf-idf cosine over page vectors) ---------- */
  var _pv = null, _pnorm = null, _idf = null, _meta = null;
  function buildPages(D){
    if(_pv) return;
    _pv = {}; _idf = {}; _meta = {};
    for(var t in D.post){
      var postings = D.post[t], df = postings.length;
      _idf[t] = Math.log(1 + (D.N - df + 0.5) / (df + 0.5));
      for(var j=0;j<postings.length;j++){
        var id = postings[j][0], tf = postings[j][1], sl = D.docs[id].u.split('#')[0];
        var pv = _pv[sl] || (_pv[sl] = {});
        pv[t] = (pv[t] || 0) + tf;
      }
    }
    for(var i=0;i<D.docs.length;i++){
      var dc = D.docs[i], s = dc.u.split('#')[0];
      if(dc.u === s) _meta[s] = { h: dc.h, d: dc.d };      // page-level entry
    }
    for(var i2=0;i2<D.docs.length;i2++){
      var dc2 = D.docs[i2], s2 = dc2.u.split('#')[0];
      if(!_meta[s2]) _meta[s2] = { h: dc2.h, d: dc2.d };
    }
    _pnorm = {};
    for(var sl2 in _pv){
      var sum = 0, vec = _pv[sl2];
      for(var tt in vec){ var w = vec[tt] * (_idf[tt] || 0); sum += w*w; }
      _pnorm[sl2] = Math.sqrt(sum) || 1;
    }
  }
  function relatedFor(slug, limit){
    var D = W.SEARCH_DATA; if(!D) return [];
    buildPages(D);
    var target = _pv[slug]; if(!target) return [];
    var scores = {};
    for(var t in target){
      var idf = _idf[t] || 0; if(idf <= 0) continue;
      var wt = target[t] * idf, postings = D.post[t]; if(!postings) continue;
      for(var j=0;j<postings.length;j++){
        var sl = D.docs[postings[j][0]].u.split('#')[0];
        if(sl === slug) continue;
        scores[sl] = (scores[sl] || 0) + wt * (postings[j][1] * idf);
      }
    }
    var arr = Object.keys(scores).map(function(s){
      return { u: s, score: scores[s] / ((_pnorm[s] || 1) * (_pnorm[slug] || 1)) };
    });
    arr.sort(function(a,b){ return b.score - a.score; });
    return arr.slice(0, limit || 4).map(function(x){
      var m = _meta[x.u] || { h: x.u, d: '' };
      return { u: x.u, h: m.h, d: m.d };
    });
  }

  var api = { search: search, stem: stem, SCOPES: SCOPES, related: relatedFor };
  W.PVSearch = api;
  if(typeof module !== 'undefined' && module.exports) module.exports = api;
})();
