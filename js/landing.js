// ===== LANDING PAGE JS =====
// js/landing.js

// ---- Floating Petals ----
const petalEmojis = ['🌸', '🌺', '💮', '🏵️', '🌹', '💐'];

function createPetal() {
  const container = document.getElementById('petalsContainer');
  const petal = document.createElement('span');
  petal.classList.add('petal');
  petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.fontSize = (Math.random() * 14 + 10) + 'px';
  petal.style.animationDuration = (Math.random() * 6 + 7) + 's';
  petal.style.animationDelay = '0s';
  petal.style.opacity = Math.random() * 0.5 + 0.3;
  container.appendChild(petal);
  setTimeout(() => petal.remove(), 14000);
}

setInterval(createPetal, 600);
for (let i = 0; i < 8; i++) setTimeout(createPetal, i * 250);

// ---- Sparkles ----
function createSparkle() {
  const container = document.getElementById('sparklesContainer');
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  const size = Math.random() * 12 + 6;
  sparkle.style.cssText = `
    left: ${Math.random() * 100}vw;
    top: ${Math.random() * 100}vh;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${Math.random() * 2 + 1.5}s;
    animation-delay: ${Math.random() * 2}s;
  `;
  container.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 4000);
}

setInterval(createSparkle, 400);
for (let i = 0; i < 10; i++) setTimeout(createSparkle, i * 200);

// ---- Floating hearts on mouse move ----
let lastHeartTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastHeartTime < 120) return;
  lastHeartTime = now;

  const heart = document.createElement('span');
  heart.classList.add('float-heart');
  heart.textContent = ['❤️','💕','💗','💖','♥'][Math.floor(Math.random() * 5)];
  heart.style.cssText = `
    left: ${e.clientX - 10}px;
    bottom: ${window.innerHeight - e.clientY}px;
    font-size: ${Math.random() * 14 + 10}px;
    animation-duration: ${Math.random() * 1.5 + 1.5}s;
  `;
  document.getElementById('heartsOverlay').appendChild(heart);
  setTimeout(() => heart.remove(), 3200);
});

// ---- Touch hearts (mobile) ----
document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const now = Date.now();
  if (now - lastHeartTime < 150) return;
  lastHeartTime = now;

  const heart = document.createElement('span');
  heart.classList.add('float-heart');
  heart.textContent = ['❤️','💕','💗'][Math.floor(Math.random() * 3)];
  heart.style.cssText = `
    left: ${touch.clientX - 10}px;
    bottom: ${window.innerHeight - touch.clientY}px;
    font-size: 16px;
    animation-duration: 2s;
  `;
  document.getElementById('heartsOverlay').appendChild(heart);
  setTimeout(() => heart.remove(), 2200);
});

// ---- Open Surprise Transition ----
function openSurprise() {
  // Fire a burst of hearts
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.classList.add('float-heart');
      heart.textContent = ['❤️','💕','💗','💖','🌸'][Math.floor(Math.random() * 5)];
      heart.style.cssText = `
        left: ${20 + Math.random() * 60}vw;
        bottom: ${10 + Math.random() * 30}vh;
        font-size: ${Math.random() * 18 + 14}px;
        animation-duration: ${Math.random() * 1 + 1.2}s;
      `;
      document.getElementById('heartsOverlay').appendChild(heart);
      setTimeout(() => heart.remove(), 2400);
    }, i * 60);
  }

  // Transition overlay then navigate
  setTimeout(() => {
    document.getElementById('transitionOverlay').classList.add('active');
  }, 600);

  setTimeout(() => {
    window.location.href = 'bubbles.html';
  }, 1400);
}
