// ===== FINAL SURPRISE PAGE JS =====
// js/final.js

// ---- Floating petals ----
const petalsFinal = ['🌸','🌹','💕','🌺','💮','✨'];

function createFinalPetal() {
  const container = document.getElementById('petalsFinal');
  if (!container) return;
  const p = document.createElement('span');
  p.classList.add('petal-f');
  p.textContent = petalsFinal[Math.floor(Math.random() * petalsFinal.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (Math.random() * 14 + 8) + 'px';
  p.style.animationDuration = (Math.random() * 6 + 8) + 's';
  p.style.opacity = Math.random() * 0.5 + 0.3;
  container.appendChild(p);
  setTimeout(() => p.remove(), 16000);
}

setInterval(createFinalPetal, 700);
for (let i = 0; i < 10; i++) setTimeout(createFinalPetal, i * 300);

// ---- Auto-fire confetti on load ----
window.addEventListener('load', () => {
  setTimeout(() => fireConfetti(), 1200);
});

// ---- Music toggle ----
let musicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');

  if (!audio) return;

  if (musicPlaying) {
    audio.pause();
    musicPlaying = false;
    btn.textContent = '🎵 Music';
    btn.classList.remove('playing');
  } else {
    audio.play().then(() => {
      musicPlaying = true;
      btn.textContent = '⏸ Pause';
      btn.classList.add('playing');
    }).catch(() => {
      // Autoplay blocked; user must click
      btn.textContent = '▶ Play Music';
    });
  }
}

// ---- Confetti Engine ----
const canvas = document.getElementById('confettiCanvas');
const ctx    = canvas.getContext('2d');
let confettiPieces = [];
let animId = null;
let confettiActive = false;

const COLORS = [
  '#f4a5b5','#e07a96','#fce4ec','#ffd6a5',
  '#bde0fe','#cdb4db','#caffbf','#ffb3c6',
  '#d4a574','#fff0a0','#a2d2ff'
];

const SHAPES = ['circle','square','heart','star'];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

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
      vx: randomBetween(-3, 3),
      vy: randomBetween(2, 6),
      vr: randomBetween(-4, 4),
      angle: Math.random() * Math.PI * 2,
      alpha: 1,
      gravity: randomBetween(0.05, 0.15),
      wobble: randomBetween(0, Math.PI * 2),
      wobbleSpeed: randomBetween(0.05, 0.15),
    });
  }
}

function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.3);
  ctx.bezierCurveTo(x + size, y - size, x + size * 1.2, y + size * 0.5, x, y + size);
  ctx.bezierCurveTo(x - size * 1.2, y + size * 0.5, x - size, y - size, x, y - size * 0.3);
  ctx.closePath();
}

function drawStar(ctx, x, y, size) {
  const spikes = 5;
  const outerR = size;
  const innerR = size * 0.4;
  let rot = (Math.PI / 2) * 3;
  const step = Math.PI / spikes;
  ctx.beginPath();
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(x + Math.cos(rot) * outerR, y + Math.sin(rot) * outerR);
    rot += step;
    ctx.lineTo(x + Math.cos(rot) * innerR, y + Math.sin(rot) * innerR);
    rot += step;
  }
  ctx.closePath();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces = confettiPieces.filter(p => p.alpha > 0.01 && p.y < canvas.height + 40);

  for (const p of confettiPieces) {
    p.x += p.vx + Math.sin(p.wobble) * 0.5;
    p.y += p.vy;
    p.vy += p.gravity;
    p.vx *= 0.99;
    p.angle += p.vr * (Math.PI / 180);
    p.wobble += p.wobbleSpeed;

    if (p.y > canvas.height * 0.6) p.alpha = Math.max(0, p.alpha - 0.015);

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;

    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.shape === 'square') {
      ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 1.4);
    } else if (p.shape === 'heart') {
      drawHeart(ctx, 0, 0, p.r);
      ctx.fill();
    } else if (p.shape === 'star') {
      drawStar(ctx, 0, 0, p.r);
      ctx.fill();
    }

    ctx.restore();
  }

  if (confettiPieces.length > 0) {
    animId = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiActive = false;
  }
}

function fireConfetti() {
  if (confettiActive) {
    confettiPieces = [];
  }

  confettiActive = true;

  if (animId) cancelAnimationFrame(animId);

  // Multiple bursts for big effect
  spawnConfetti(120);
  setTimeout(() => spawnConfetti(100), 300);
  setTimeout(() => spawnConfetti(80), 700);
  setTimeout(() => spawnConfetti(60), 1200);

  animateConfetti();
}
