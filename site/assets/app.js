/* ============================================================
   PVSource Docs — interactions
   search · command palette · reveal · toc · progress · animations
   ============================================================ */
(function(){
  "use strict";

  /* ---------- reading progress ---------- */
  var progress = document.getElementById('progress');
  function onScroll(){
    if(progress){
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      progress.style.width = (p*100).toFixed(2) + '%';
    }
    tocSpy();
  }
  window.addEventListener('scroll', onScroll, {passive:true});

  /* ---------- scroll reveal ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* wrap tables for horizontal scroll (before reveal tagging) */
  document.querySelectorAll('.content table').forEach(function(t){
    if(t.parentElement.classList.contains('table-scroll')) return;
    var w = document.createElement('div'); w.className='table-scroll';
    t.parentNode.insertBefore(w,t); w.appendChild(t);
  });

  /* progressively reveal content blocks per section (staggered within view) */
  var article = document.querySelector('.content');
  if(article && !reduce){
    var blocks = article.querySelectorAll(':scope > h2, :scope > h3, :scope > h4, :scope > p, :scope > ul, :scope > ol, :scope > blockquote, :scope > pre, :scope > .table-scroll, :scope > .pager');
    var grp = 0;
    blocks.forEach(function(el){
      el.classList.add('reveal');
      if(el.tagName === 'H2'){ grp = 0; }       // reset stagger at each section
      el.setAttribute('data-delay', Math.min(grp*55, 220));
      grp++;
    });
  }

  var io;
  if('IntersectionObserver' in window && !reduce){
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var el = e.target;
          var d = el.getAttribute('data-delay');
          if(d){ el.style.transitionDelay = d + 'ms'; }
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- animate bars / counters when visible ---------- */
  if('IntersectionObserver' in window){
    var vio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target;
        if(el.classList.contains('bar-fill')){
          el.style.width = (el.getAttribute('data-pct')||0) + '%';
        }
        if(el.hasAttribute('data-count')){
          countUp(el);
        }
        vio.unobserve(el);
      });
    }, {threshold:0.4});
    document.querySelectorAll('.bar-fill,[data-count]').forEach(function(el){ vio.observe(el); });
  } else {
    document.querySelectorAll('.bar-fill').forEach(function(el){ el.style.width = (el.getAttribute('data-pct')||0)+'%'; });
  }
  function countUp(el){
    if(reduce){ el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix')||''); return; }
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix')||'';
    var dec = (el.getAttribute('data-dec')||'0')|0;
    var start = performance.now(), dur = 1100;
    function tick(now){
      var t = Math.min((now-start)/dur,1);
      var eased = 1 - Math.pow(1-t,3);
      el.textContent = (target*eased).toFixed(dec) + suffix;
      if(t<1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec) + suffix;
    }
    requestAnimationFrame(tick);
  }

  /* ---------- TOC scrollspy ---------- */
  var tocLinks = [].slice.call(document.querySelectorAll('.toc a'));
  var heads = tocLinks.map(function(a){
    var id = a.getAttribute('href').slice(1);
    return document.getElementById(id);
  });
  function tocSpy(){
    if(!tocLinks.length) return;
    var pos = window.scrollY + 120;
    var idx = 0;
    for(var i=0;i<heads.length;i++){
      if(heads[i] && heads[i].offsetTop <= pos) idx = i;
    }
    tocLinks.forEach(function(a,i){ a.classList.toggle('active', i===idx); });
  }
  onScroll();

  /* ---------- mobile nav ---------- */
  var sidebar = document.querySelector('.sidebar');
  var scrimNav = document.querySelector('.scrim-nav');
  function toggleNav(open){
    if(!sidebar) return;
    sidebar.classList.toggle('open', open);
    if(scrimNav) scrimNav.classList.toggle('open', open);
  }
  var burger = document.querySelector('.burger');
  if(burger) burger.addEventListener('click', function(){ toggleNav(!sidebar.classList.contains('open')); });
  if(scrimNav) scrimNav.addEventListener('click', function(){ toggleNav(false); });

  /* ---------- theme toggle (dark / light) ---------- */
  var root = document.documentElement;
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try{ localStorage.setItem('pv-theme', t); }catch(e){}
  }
  function toggleTheme(){ applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); }
  document.querySelectorAll('[data-theme-toggle]').forEach(function(b){ b.addEventListener('click', toggleTheme); });

  /* ---------- collapsible nav groups (persisted) ---------- */
  var COLLAPSE_KEY = 'pv-nav-collapsed';
  function getCollapsed(){ try{ return JSON.parse(localStorage.getItem(COLLAPSE_KEY) || '{}'); }catch(e){ return {}; } }
  function setCollapsed(o){ try{ localStorage.setItem(COLLAPSE_KEY, JSON.stringify(o)); }catch(e){} }
  // Sections start COLLAPSED by default. A group opens only if it contains the
  // current page, or the user has explicitly opened it before (persisted).
  var savedState = getCollapsed(); // name -> 'open' | 'closed'
  document.querySelectorAll('.nav-group').forEach(function(g){
    var name = g.getAttribute('data-group');
    var hasActive = !!g.querySelector('.nav-link.active');
    var open = hasActive || savedState[name] === 'open';
    g.classList.toggle('collapsed', !open);
    var btn = g.querySelector('.nav-group-toggle');
    if(btn){
      btn.setAttribute('aria-expanded', String(open));
      btn.addEventListener('click', function(){
        var nowCollapsed = g.classList.toggle('collapsed');
        savedState[name] = nowCollapsed ? 'closed' : 'open'; setCollapsed(savedState);
        btn.setAttribute('aria-expanded', String(!nowCollapsed));
      });
    }
  });

  /* ============================================================
     SEARCH / COMMAND PALETTE
     ============================================================ */
  var scrim = document.getElementById('palette');
  var input = document.getElementById('pal-input');
  var resultsBox = document.getElementById('pal-results');
  var BASE = (document.body.getAttribute('data-base')||'');
  var sel = 0, current = [];
  var activeScope = 'All';

  function openPalette(){
    if(!scrim) return;
    scrim.classList.add('open');
    requestAnimationFrame(function(){ scrim.classList.add('show'); });
    document.body.style.overflow = 'hidden';
    input.value=''; render('');
    setTimeout(function(){ input.focus(); }, 60);
    toggleNav(false);
  }
  function closePalette(){
    if(!scrim) return;
    scrim.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(function(){ scrim.classList.remove('open'); }, 240);
  }
  function esc(s){ return s.replace(/[<>&]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;'}[c];}); }

  function render(q){
    q = (q||'').trim();
    sel = 0;
    if(!q){
      current = [];
      resultsBox.innerHTML = '<div class="palette-empty">Ask a question or search — e.g. “what are inverters?”, “how to calculate conduit fill”, “rapid shutdown”, “demand charges”, “tracker backtracking”.</div>';
      return;
    }
    current = (window.PVSearch ? window.PVSearch.search(q, 24, activeScope) : []);
    if(!current.length){
      resultsBox.innerHTML = '<div class="palette-empty">No matches for “'+esc(q)+'”. Try fewer or different words.</div>';
      return;
    }
    resultsBox.innerHTML = current.map(function(r,i){
      return '<a class="result'+(i===0?' sel':'')+'" data-i="'+i+'" href="'+BASE+r.u+'">'+
        '<div class="r-top"><span class="r-doc">'+esc(r.d)+'</span>'+
        '<span class="r-head">'+esc(r.h)+'</span></div>'+
        '<div class="r-snip">'+r.snippet+'</div></a>';
    }).join('');
  }

  function move(dir){
    var items = resultsBox.querySelectorAll('.result');
    if(!items.length) return;
    items[sel] && items[sel].classList.remove('sel');
    sel = (sel + dir + items.length) % items.length;
    items[sel].classList.add('sel');
    items[sel].scrollIntoView({block:'nearest'});
  }
  function goSel(){
    var items = resultsBox.querySelectorAll('.result');
    if(items[sel]) window.location.href = items[sel].getAttribute('href');
  }

  if(input){
    input.addEventListener('input', function(){ render(input.value); });
    resultsBox.addEventListener('mousemove', function(e){
      var r = e.target.closest('.result'); if(!r) return;
      var i = +r.getAttribute('data-i');
      if(i!==sel){ var items=resultsBox.querySelectorAll('.result'); items[sel]&&items[sel].classList.remove('sel'); sel=i; r.classList.add('sel'); }
    });
  }

  // triggers
  document.querySelectorAll('[data-search]').forEach(function(el){
    el.addEventListener('click', openPalette);
  });
  if(scrim){
    scrim.addEventListener('click', function(e){ if(e.target===scrim) closePalette(); });
  }
  document.addEventListener('keydown', function(e){
    var open = scrim && scrim.classList.contains('open');
    if((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k'){ e.preventDefault(); open?closePalette():openPalette(); return; }
    if(e.key==='/' && !open && !/input|textarea/i.test(document.activeElement.tagName)){ e.preventDefault(); openPalette(); return; }
    if(!open) return;
    if(e.key==='Escape'){ closePalette(); }
    else if(e.key==='ArrowDown'){ e.preventDefault(); move(1); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); move(-1); }
    else if(e.key==='Enter'){ e.preventDefault(); goSel(); }
  });

  /* ---------- search scope chips ---------- */
  (function(){
    var box = document.getElementById('pal-scopes');
    if(!box || !window.PVSearch) return;
    var scopes = ['All'].concat(Object.keys(window.PVSearch.SCOPES));
    box.innerHTML = scopes.map(function(s){
      return '<button class="pal-chip'+(s==='All'?' on':'')+'" data-scope="'+s+'">'+s+'</button>';
    }).join('');
    box.addEventListener('click', function(e){
      var b = e.target.closest('.pal-chip'); if(!b) return;
      activeScope = b.getAttribute('data-scope');
      box.querySelectorAll('.pal-chip').forEach(function(c){ c.classList.toggle('on', c===b); });
      render(input.value); input.focus();
    });
  })();

  /* ---------- print / save PDF ---------- */
  document.querySelectorAll('[data-print]').forEach(function(b){
    b.addEventListener('click', function(){ window.print(); });
  });

  /* ---------- glossary tooltips ---------- */
  (function(){
    var G = window.GLOSSARY;
    var article = document.querySelector('.content');
    if(!G || !article) return;
    if(/engineering-glossary\.html$/.test(location.pathname)) return; // skip on the glossary itself
    var terms = Object.keys(G).sort(function(a,b){ return b.length - a.length; });
    if(!terms.length) return;
    var used = {}, wraps = 0, MAXW = 80;
    function rx(t){ return t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
    var pattern = new RegExp('\\b(' + terms.map(rx).join('|') + ')\\b', 'i');
    var walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        if(wraps >= MAXW) return NodeFilter.FILTER_REJECT;
        var p = node.parentNode;
        while(p && p !== article){
          var tag = p.nodeName.toLowerCase();
          if(tag==='a'||tag==='code'||tag==='pre'||tag==='h1'||tag==='h2'||tag==='h3'||tag==='h4'||
             (p.classList && p.classList.contains('gloss'))) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = []; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(wraps >= MAXW) return;
      var m = pattern.exec(node.nodeValue); if(!m) return;
      var termLc = m[1].toLowerCase();
      if(used[termLc] || !G[termLc]) return;
      used[termLc] = 1; wraps++;
      var text = node.nodeValue;
      var span = document.createElement('span');
      span.className = 'gloss'; span.textContent = m[1]; span.setAttribute('data-term', termLc);
      var frag = document.createDocumentFragment();
      if(m.index) frag.appendChild(document.createTextNode(text.slice(0, m.index)));
      frag.appendChild(span);
      var rest = text.slice(m.index + m[1].length);
      if(rest) frag.appendChild(document.createTextNode(rest));
      node.parentNode.replaceChild(frag, node);
    });
    var pop = document.createElement('div'); pop.className = 'gloss-pop'; document.body.appendChild(pop);
    var hideT, BASE2 = (document.body.getAttribute('data-base')||'');
    function show(el){
      clearTimeout(hideT);
      var d = G[el.getAttribute('data-term')]; if(!d) return;
      pop.innerHTML = '<div class="gt">'+d.t+'</div>'+d.d+'<br><a href="'+BASE2+d.u+'">Open in glossary →</a>';
      var r = el.getBoundingClientRect();
      pop.style.visibility='hidden'; pop.classList.add('show');
      var pw = pop.offsetWidth, ph = pop.offsetHeight;
      var left = Math.min(Math.max(8, r.left), window.innerWidth - pw - 8);
      var top = r.bottom + 8; if(top + ph > window.innerHeight - 8) top = r.top - ph - 8;
      pop.style.left = left+'px'; pop.style.top = Math.max(8,top)+'px'; pop.style.visibility='visible';
    }
    function hide(){ hideT = setTimeout(function(){ pop.classList.remove('show'); }, 140); }
    article.addEventListener('mouseover', function(e){ var g=e.target.closest && e.target.closest('.gloss'); if(g) show(g); });
    article.addEventListener('mouseout', function(e){ if(e.target.closest && e.target.closest('.gloss')) hide(); });
    pop.addEventListener('mouseenter', function(){ clearTimeout(hideT); });
    pop.addEventListener('mouseleave', hide);
  })();

  /* ---------- related pages ---------- */
  (function(){
    var slot = document.getElementById('related-slot');
    if(!slot || !window.PVSearch || !window.PVSearch.related) return;
    var slug = location.pathname.split('/').pop();
    var rel = window.PVSearch.related(slug, 4);
    if(!rel.length) return;
    slot.innerHTML = '<h3>Related pages</h3><div class="related-grid">' + rel.map(function(r){
      return '<a href="'+r.u+'"><span class="rb">'+esc(r.d)+'</span><span class="rt">'+esc(r.h)+'</span></a>';
    }).join('') + '</div>';
    slot.hidden = false;
  })();

  /* ---------- saved jurisdiction reminder (set via the State Map) ---------- */
  (function(){
    var jz; try{ jz = localStorage.getItem('pv-jz'); }catch(e){}
    if(jz) document.querySelectorAll('[data-jz]').forEach(function(e){ e.textContent = ' Your saved jurisdiction: ' + jz + '.'; });
  })();

  /* ---------- bookmarks (persist across sessions via localStorage) ---------- */
  (function(){
    var BKEY = 'pv-bookmarks';
    function getBM(){ try{ return JSON.parse(localStorage.getItem(BKEY) || '[]'); }catch(e){ return []; } }
    function setBM(a){ try{ localStorage.setItem(BKEY, JSON.stringify(a)); }catch(e){} }
    var slug = location.pathname.split('/').pop();
    var pageTitle = (document.title || '').replace(/\s·\sPVSource$/, '').replace(/\sPVSource$/, '');
    var section = document.body.getAttribute('data-section') || '';
    // star toggle in the page header
    var star = document.querySelector('[data-bookmark]');
    if(star){
      var marked = function(){ return getBM().some(function(b){ return b.slug === slug; }); };
      var sync = function(){ var m = marked(); star.classList.toggle('on', m); star.setAttribute('title', m ? 'Remove bookmark' : 'Bookmark this page'); };
      sync();
      star.addEventListener('click', function(){
        var a = getBM(), i = a.map(function(b){ return b.slug; }).indexOf(slug);
        if(i >= 0) a.splice(i, 1); else a.push({ slug: slug, title: pageTitle, section: section });
        setBM(a); sync();
      });
    }
    // bookmarks page
    var listEl = document.getElementById('bookmarks-list');
    if(listEl){
      var bms = getBM();
      if(!bms.length){
        listEl.innerHTML = '<div class="bm-empty">No bookmarks yet.<br>Open any guide and tap the <strong>☆ Bookmark</strong> button in its header to save it here — your list is kept on this device even after you close and reopen the site.</div>';
      } else {
        var order = [], g = {};
        bms.forEach(function(b){ var s = b.section || 'Saved'; if(!g[s]){ g[s] = []; order.push(s); } g[s].push(b); });
        listEl.innerHTML = order.map(function(s){
          return '<div class="bm-group"><h3>' + esc(s) + '</h3>' + g[s].map(function(b){
            return '<div class="bm-item"><a href="' + b.slug + '">' + esc(b.title) + '</a><button class="bm-rm" data-slug="' + b.slug + '" title="Remove" aria-label="Remove bookmark">✕</button></div>';
          }).join('') + '</div>';
        }).join('');
        listEl.addEventListener('click', function(e){
          var rm = e.target.closest('.bm-rm'); if(!rm) return;
          setBM(getBM().filter(function(b){ return b.slug !== rm.getAttribute('data-slug'); }));
          var it = rm.closest('.bm-item'), grp = it.parentNode; it.remove();
          if(grp && !grp.querySelector('.bm-item')) grp.remove();
          if(!listEl.querySelector('.bm-item')) listEl.innerHTML = '<div class="bm-empty">No bookmarks yet.</div>';
        });
      }
    }
  })();

  /* ---------- shortcut hint: show "Ctrl K" on Windows/Linux ---------- */
  (function(){
    var isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.platform || '') || /Mac OS X/i.test(navigator.userAgent || '');
    if(isMac) return;
    document.querySelectorAll('.kbd').forEach(function(k){
      if(/⌘\s*K/i.test(k.textContent)) k.textContent = 'Ctrl K';
    });
  })();

  /* ---------- year in footer ---------- */
  var yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();
})();
