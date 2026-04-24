// ===== MEMORIES PAGE JS =====
// js/memories-page.js — reads from js/memories.config.js (MEMORIES array)

const slideshowEl = document.getElementById('slideshow');
const dotsEl      = document.getElementById('slideDots');
const overlayEl   = document.getElementById('slideOverlay');
let currentSlide  = 0;

// ✏️ Milliseconds each slide stays visible
const SLIDE_DURATION = 3500;

// ── Build slideshow ──
MEMORIES.forEach((item, i) => {
  const slide = document.createElement('div');
  slide.className = 'slide' + (i === 0 ? ' active' : '');

  if (item.type === 'video') {
    const v = document.createElement('video');
    v.src = item.src; v.autoplay = true; v.muted = true;
    v.loop = true; v.playsInline = true;
    slide.appendChild(v);
  } else {
    const img = document.createElement('img');
    img.src = item.src; img.alt = 'Memory ' + (i + 1);
    slide.appendChild(img);
  }

  slideshowEl.appendChild(slide);

  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsEl.appendChild(dot);
});

// Set initial caption
if (overlayEl) overlayEl.textContent = MEMORIES[0]?.caption || '';

function goToSlide(n) {
  const slides = slideshowEl.querySelectorAll('.slide');
  const dots   = dotsEl.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = ((n % MEMORIES.length) + MEMORIES.length) % MEMORIES.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  if (overlayEl) overlayEl.textContent = MEMORIES[currentSlide]?.caption || '';
  const vid = slides[currentSlide].querySelector('video');
  if (vid) { vid.currentTime = 0; vid.play(); }
}

setInterval(() => goToSlide(currentSlide + 1), SLIDE_DURATION);

// ── Music ──
const _music = document.getElementById('bgMusic');
const _toggleBtn = document.getElementById('musicToggle');
if (_music) {
  _music.volume = 0.45;
  const tryPlay = () => _music.play().catch(() => {});
  tryPlay();
  // Retry on first interaction if browser blocked autoplay
  const startOnce = () => {
    tryPlay();
    document.removeEventListener('click', startOnce);
    document.removeEventListener('touchstart', startOnce);
  };
  document.addEventListener('click', startOnce);
  document.addEventListener('touchstart', startOnce);
}
if (_toggleBtn) {
  _toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!_music) return;
    if (_music.paused) {
      _music.play();
      _toggleBtn.textContent = '🎵';
      _toggleBtn.classList.remove('muted');
    } else {
      _music.pause();
      _toggleBtn.textContent = '🔇';
      _toggleBtn.classList.add('muted');
    }
  });
}

// ── Floating petals ──
const _petals = ['🌸','🌹','💕','🌺','💮','✨'];
function createPetal() {
  const c = document.getElementById('petalsFinal');
  if (!c) return;
  const p = document.createElement('span');
  p.classList.add('petal-f');
  p.textContent = _petals[Math.floor(Math.random() * _petals.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (Math.random() * 14 + 8) + 'px';
  p.style.animationDuration = (Math.random() * 6 + 8) + 's';
  p.style.opacity = Math.random() * 0.5 + 0.3;
  c.appendChild(p);
  setTimeout(() => p.remove(), 16000);
}
setInterval(createPetal, 700);
for (let i = 0; i < 10; i++) setTimeout(createPetal, i * 300);
