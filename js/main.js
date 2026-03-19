/* ============================================================
   LRSTORE.ID – main.js v4 FULL FEATURED
   ============================================================ */

// ============ CONFIG ============
const CONFIG = {
  youtubeHero:    'fSYM86QaZZY',   // video hero utama
  youtubeGuides: [
    { id: 'fSYM86QaZZY', title: 'Cara Top Up Mobile Legends di LRSTORE.ID', game: 'Mobile Legends', dur: '2:45' },
    { id: 'fSYM86QaZZY', title: 'Tips & Trik Naik Rank Mobile Legends 2026', game: 'Mobile Legends', dur: '8:12' },
    { id: 'fSYM86QaZZY', title: 'Cara Top Up Free Fire Termurah', game: 'Free Fire', dur: '3:20' },
    { id: 'fSYM86QaZZY', title: 'Build Item Terbaik PUBG Mobile Season Ini', game: 'PUBG Mobile', dur: '6:55' },
    { id: 'fSYM86QaZZY', title: 'Review Skin Mobile Legends Terbaru', game: 'Mobile Legends', dur: '5:30' },
    { id: 'fSYM86QaZZY', title: 'Cara Daftar & Login LRSTORE.ID', game: 'Tutorial', dur: '1:50' },
  ],
  // TOPUP NOTIFICATIONS - Live Feed
  topupNotifs: [
    { user: 'Aldi R***', item: '86 Diamond ML', time: '2 detik lalu', icon: 'fas fa-chess-knight' },
    { user: 'Budi S***', item: '172 Diamond ML', time: '5 detik lalu', icon: 'fas fa-chess-knight' },
    { user: 'Citra M***', item: '500 UC PUBG', time: '8 detik lalu', icon: 'fas fa-crosshairs' },
    { user: 'Dian P***', item: '100 Diamond FF', time: '12 detik lalu', icon: 'fas fa-fire' },
    { user: 'Eko W***', item: '514 Diamond ML', time: '15 detik lalu', icon: 'fas fa-chess-knight' },
    { user: 'Fina K***', item: 'Royale Pass PUBG', time: '18 detik lalu', icon: 'fas fa-crosshairs' },
    { user: 'Gita L***', item: '257 Diamond ML', time: '22 detik lalu', icon: 'fas fa-chess-knight' },
    { user: 'Hendra T***', item: '800 UC PUBG', time: '30 detik lalu', icon: 'fas fa-crosshairs' },
    { user: 'Intan S***', item: '200 Diamond FF', time: '35 detik lalu', icon: 'fas fa-fire' },
    { user: 'Joko A***', item: '1720 Diamond ML', time: '40 detik lalu', icon: 'fas fa-chess-knight' },
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollTop();
  initCounters();
  initRevealAnimations();
  initParticles();
  initBannerSlider();
  initTopupNotifications();
  initVideoPlayers();
  initArticleFilter();
  initGameSearch();
  initSmoothScroll();
  setActivePage();
});

// ============ NAVBAR ============
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navActions = document.querySelector('.nav-actions');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('open');
    navActions?.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('open');
      navActions?.classList.remove('open');
    });
  });
}

// ============ SCROLL TOP ============
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============ COUNTER ANIMATION ============
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  let done = false;

  const run = () => {
    if (done) return;
    const hero = document.getElementById('hero');
    if (hero && hero.getBoundingClientRect().top < window.innerHeight) {
      done = true;
      counters.forEach(el => {
        const target = parseInt(el.dataset.count);
        const dur = 2000;
        const step = target / (dur / 16);
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = Math.floor(cur).toLocaleString('id-ID');
        }, 16);
      });
    }
  };
  window.addEventListener('scroll', run);
  run();
}

// ============ REVEAL ANIMATIONS ============
function initRevealAnimations() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}

// ============ PARTICLES ============
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:absolute;border-radius:50%;
      width:${Math.random() * 5 + 2}px;height:${Math.random() * 5 + 2}px;
      background:rgba(229,57,53,${Math.random() * 0.3 + 0.1});
      left:${Math.random() * 100}%;bottom:-10px;
      animation:particleRise ${Math.random() * 6 + 5}s ease-in-out infinite;
      animation-delay:${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
  if (!document.getElementById('particleStyle')) {
    const s = document.createElement('style');
    s.id = 'particleStyle';
    s.textContent = `@keyframes particleRise{0%{opacity:0;transform:translateY(0) scale(0)}15%{opacity:.6}85%{opacity:.1}100%{opacity:0;transform:translateY(-400px) scale(1.5)}}`;
    document.head.appendChild(s);
  }
}

// ============ BANNER SLIDER ============
function initBannerSlider() {
  const track = document.getElementById('bannerTrack');
  const dots = document.querySelectorAll('.banner-dot');
  const total = document.querySelectorAll('.banner-slide').length;
  if (!track || total === 0) return;
  let cur = 0, timer;

  const go = (idx) => {
    cur = (idx + total) % total;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  };

  const next = () => go(cur + 1);
  const prev = () => go(cur - 1);

  document.getElementById('bannerNext')?.addEventListener('click', () => { clearInterval(timer); next(); timer = setInterval(next, 4000); });
  document.getElementById('bannerPrev')?.addEventListener('click', () => { clearInterval(timer); prev(); timer = setInterval(next, 4000); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); go(i); timer = setInterval(next, 4000); }));

  timer = setInterval(next, 4000);
}

// ============ TOPUP LIVE NOTIFICATIONS ============
function initTopupNotifications() {
  const container = document.getElementById('topupNotifContainer');
  if (!container) return;
  const notifs = CONFIG.topupNotifs;
  let idx = 0;

  function showNotif() {
    const data = notifs[idx % notifs.length];
    idx++;

    const el = document.createElement('div');
    el.className = 'notif-item';
    el.innerHTML = `
      <div class="notif-icon"><i class="${data.icon}"></i></div>
      <div class="notif-content">
        <strong>${data.user} berhasil top up</strong>
        <span>${data.item}</span>
      </div>
      <span class="notif-time">${data.time}</span>
    `;
    container.appendChild(el);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.add('show'));
    });

    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 500);
    }, 4000);
  }

  // Start after 2s, then every 5s
  setTimeout(() => {
    showNotif();
    setInterval(showNotif, 5000);
  }, 2000);
}

// ============ VIDEO PLAYERS ============
function initVideoPlayers() {
  // Hero video
  window.playHeroVideo = function() {
    const thumb = document.getElementById('heroVideoThumb');
    const frame = document.getElementById('heroVideoFrame');
    if (!thumb || !frame) return;
    thumb.style.display = 'none';
    frame.style.display = 'block';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${CONFIG.youtubeHero}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block';
    frame.style.cssText = 'display:block;width:100%;aspect-ratio:16/9';
    frame.appendChild(iframe);
  };

  // Article video
  window.playArticleVideo = function() {
    const thumb = document.getElementById('articleVideoThumb');
    const frame = document.getElementById('articleVideoFrame');
    if (!thumb || !frame) return;
    thumb.style.display = 'none';
    frame.style.display = 'block';
    const videoId = frame.dataset.videoid || CONFIG.youtubeHero;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;display:block';
    frame.style.cssText = 'display:block;width:100%;aspect-ratio:16/9';
    frame.appendChild(iframe);
  };

  // Guide videos
  window.playGuideVideo = function(btn) {
    const card = btn.closest('.guide-card');
    if (!card) return;
    const videoId = card.dataset.videoid || CONFIG.youtubeHero;
    const wrap = card.querySelector('.guide-video');
    if (!wrap) return;
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="width:100%;height:100%;border:none;display:block;aspect-ratio:16/9"></iframe>`;
  };
}

// ============ ARTICLE FILTER ============
function initArticleFilter() {
  const pills = document.querySelectorAll('.fpill');
  const cards = document.querySelectorAll('#artikelGrid .alc');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  function filter() {
    const cat = document.querySelector('.fpill.active')?.dataset.filter || 'all';
    const q = searchInput?.value.toLowerCase() || '';
    let count = 0;
    cards.forEach(card => {
      const cardCat = card.dataset.cat || '';
      const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const show = (cat === 'all' || cardCat === cat) && (!q || title.includes(q) || desc.includes(q));
      card.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (noResults) noResults.style.display = count === 0 ? 'block' : 'none';
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filter();
    });
  });
  searchInput?.addEventListener('input', filter);
}

// ============ GAME SEARCH ============
function initGameSearch() {
  const input = document.getElementById('gameSearch');
  const cards = document.querySelectorAll('.gtc');
  const noRes = document.getElementById('gameNoResults');

  input?.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    let count = 0;
    cards.forEach(c => {
      const show = !q || (c.dataset.name || '').includes(q);
      c.style.display = show ? '' : 'none';
      if (show) count++;
    });
    if (noRes) noRes.style.display = count === 0 ? 'block' : 'none';
  });
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ============ ACTIVE PAGE ============
function setActivePage() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    const href = l.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) l.classList.add('active');
    else if (page !== 'index.html') l.classList.remove('active');
  });
}

// ============ GUIDE TABS ============
document.querySelectorAll('.guide-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.guide-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.guide-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.game === filter) ? '' : 'none';
    });
  });
});
