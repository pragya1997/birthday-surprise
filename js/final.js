// ===== FINAL SURPRISE PAGE JS =====
// js/final.js

// ══════════════════════════════════════════════════════════════
// ✏️  SLIDESHOW CONFIG — add your own images / videos here
//
//   type : "image"  or  "video"
//   src  : file path  (put files in images/ or videos/ folder)
//
// To ADD  → paste a new { type, src } line inside the array
// To REMOVE → delete its line (and the trailing comma)
// ══════════════════════════════════════════════════════════════
const SLIDES = [
  { type: "image", src: "images/slide1.jpg" },
  { type: "image", src: "images/slide2.jpg" },
  { type: "video", src: "videos/video1.mp4" },
  { type: "image", src: "images/slide3.jpg" },
];

// ✏️ Milliseconds each slide stays visible
const SLIDE_DURATION = 3000;

// ✏️ Delay before the final message fades in (ms)
const OUTRO_DELAY = 18000;

// ══════════════════════════════════════════════════════════════
// ── Build slideshow ──
const slideshowEl = document.getElementById('slideshow');
const dotsEl      = document.getElementById('slideDots');
let currentSlide  = 0;

SLIDES.forEach((item, i) => {
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

function goToSlide(n) {
  const slides = slideshowEl.querySelectorAll('.slide');
  const dots   = dotsEl.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = ((n % SLIDES.length) + SLIDES.length) % SLIDES.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  const vid = slides[currentSlide].querySelector('video');
  if (vid) { vid.currentTime = 0; vid.play(); }
}

setInterval(() => goToSlide(currentSlide + 1), SLIDE_DURATION);

// ── Show final outro immediately ──
document.getElementById('finalOutro').classList.add('visible');

// ── Floating petals ──
const _petals = ['🌸','🌹','💕','🌺','💮','✨'];
function createFinalPetal() {
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
setInterval(createFinalPetal, 700);
for (let i = 0; i < 10; i++) setTimeout(createFinalPetal, i * 300);

// ── Music — auto-start at low volume ──
// ── Music — auto-play silently, retry on first user interaction ──
const _audio = document.getElementById('bgMusic');
if (_audio) {
  _audio.volume = 0.4;
  _audio.play().catch(() => {
    // Browser blocked autoplay — start on first tap/click
    const startOnce = () => { _audio.play(); document.removeEventListener('click', startOnce); document.removeEventListener('touchstart', startOnce); };
    document.addEventListener('click', startOnce);
    document.addEventListener('touchstart', startOnce);
  });
}

// ── Confetti Engine ──
const canvas = document.getElementById('confettiCanvas');
const ctx    = canvas.getContext('2d');
let confettiPieces = [];
let animId = null;
let confettiActive = false;

const COLORS = ['#f4a5b5','#e07a96','#fce4ec','#ffd6a5','#bde0fe','#cdb4db','#caffbf','#ffb3c6','#fff0a0'];
const SHAPES = ['circle','square','heart','star'];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function randomBetween(a, b) { return a + Math.random() * (b - a); }

function spawnConfetti(count = 150) {
  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: randomBetween(0.2, 0.8) * canvas.width,
      y: randomBetween(-0.1, 0.1) * canvas.height,
      r: randomBetween(5, 12),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      vx: randomBetween(-3, 3), vy: randomBetween(2, 6), vr: randomBetween(-4, 4),
      angle: Math.random() * Math.PI * 2, alpha: 1,
      gravity: randomBetween(0.05, 0.15),
      wobble: randomBetween(0, Math.PI * 2), wobbleSpeed: randomBetween(0.05, 0.15),
    });
  }
}

function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size * .3);
  ctx.bezierCurveTo(x + size, y - size, x + size * 1.2, y + size * .5, x, y + size);
  ctx.bezierCurveTo(x - size * 1.2, y + size * .5, x - size, y - size, x, y - size * .3);
  ctx.closePath();
}

function drawStar(ctx, x, y, size) {
  const spikes = 5, outerR = size, innerR = size * .4;
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(x + Math.cos(rot) * outerR, y + Math.sin(rot) * outerR); rot += step;
    ctx.lineTo(x + Math.cos(rot) * innerR, y + Math.sin(rot) * innerR); rot += step;
  }
  ctx.closePath();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces = confettiPieces.filter(p => p.alpha > 0.01 && p.y < canvas.height + 40);
  for (const p of confettiPieces) {
    p.x += p.vx + Math.sin(p.wobble) * .5; p.y += p.vy; p.vy += p.gravity;
    p.vx *= .99; p.angle += p.vr * (Math.PI / 180); p.wobble += p.wobbleSpeed;
    if (p.y > canvas.height * .6) p.alpha = Math.max(0, p.alpha - .015);
    ctx.save(); ctx.globalAlpha = p.alpha; ctx.translate(p.x, p.y); ctx.rotate(p.angle); ctx.fillStyle = p.color;
    if      (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0,0,p.r,0,Math.PI*2); ctx.fill(); }
    else if (p.shape === 'square') { ctx.fillRect(-p.r,-p.r,p.r*2,p.r*1.4); }
    else if (p.shape === 'heart')  { drawHeart(ctx,0,0,p.r); ctx.fill(); }
    else if (p.shape === 'star')   { drawStar(ctx,0,0,p.r); ctx.fill(); }
    ctx.restore();
  }
  if (confettiPieces.length > 0) { animId = requestAnimationFrame(animateConfetti); }
  else { ctx.clearRect(0,0,canvas.width,canvas.height); confettiActive = false; }
}

window.fireConfetti = function() {
  if (confettiActive) confettiPieces = [];
  confettiActive = true;
  if (animId) cancelAnimationFrame(animId);
  spawnConfetti(120);
  setTimeout(() => spawnConfetti(100), 300);
  setTimeout(() => spawnConfetti(80),  700);
  setTimeout(() => spawnConfetti(60),  1200);
  animateConfetti();
};
