// ===== LANDING PAGE JS =====

// Guard: redirect to password page if not unlocked
if (!sessionStorage.getItem('unlocked')) {
  window.location.replace('password.html');
}

const PETALS = ['🌸','🌺','💮','🌹','💐','🏵️'];
const BUBBLE_COLORS = [
  ['#e8175d','#ff6b9d'],['#7c3aed','#a855f7'],['#0ea5e9','#38bdf8'],
  ['#f59e0b','#fcd34d'],['#10b981','#34d399'],['#e8175d','#ffd700'],
  ['#6366f1','#818cf8'],['#ec4899','#f472b6'],
];

// Petals
function spawnPetal() {
  const c = document.getElementById('petalsContainer');
  if (!c) return;
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
  p.style.cssText = `left:${Math.random()*100}vw;font-size:${Math.random()*14+10}px;animation-duration:${Math.random()*6+7}s;opacity:${Math.random()*.5+.3};`;
  c.appendChild(p);
  setTimeout(() => p.remove(), 14000);
}
setInterval(spawnPetal, 600);
for (let i = 0; i < 8; i++) setTimeout(spawnPetal, i * 250);

// Sparkles
function spawnSparkle() {
  const c = document.getElementById('sparklesContainer');
  if (!c) return;
  const s = document.createElement('div');
  s.className = 'sparkle';
  const sz = Math.random() * 12 + 6;
  s.style.cssText = `left:${Math.random()*100}vw;top:${Math.random()*100}vh;width:${sz}px;height:${sz}px;animation-duration:${Math.random()*2+1.5}s;animation-delay:${Math.random()*2}s;`;
  c.appendChild(s);
  setTimeout(() => s.remove(), 4000);
}
setInterval(spawnSparkle, 400);
for (let i = 0; i < 10; i++) setTimeout(spawnSparkle, i * 150);

// Side decorative bubbles
function buildSideBubbles(id, count) {
  const col = document.getElementById(id);
  if (!col) return;
  for (let i = 0; i < count; i++) {
    const [c1, c2] = BUBBLE_COLORS[i % BUBBLE_COLORS.length];
    const size = Math.random() * 55 + 28;
    const b = document.createElement('div');
    b.className = 'sc-bub';
    b.style.cssText = `width:${size}px;height:${size}px;top:${3+Math.random()*90}%;left:${Math.random()*50}%;--c1:${c1};--c2:${c2};opacity:${Math.random()*.3+.35};animation-duration:${Math.random()*4+3}s;animation-delay:${Math.random()*3}s;`;
    col.appendChild(b);
  }
}
buildSideBubbles('leftCol', 10);
buildSideBubbles('rightCol', 10);

// Mouse heart trail
let lastHeart = 0;
document.addEventListener('mousemove', e => {
  const now = Date.now();
  if (now - lastHeart < 120) return;
  lastHeart = now;
  const h = document.createElement('span');
  h.className = 'float-heart';
  h.textContent = ['❤️','💕','💗','💖','♥'][Math.floor(Math.random()*5)];
  h.style.cssText = `left:${e.clientX-10}px;bottom:${window.innerHeight-e.clientY}px;font-size:${Math.random()*14+10}px;animation-duration:${Math.random()*1.5+1.5}s;`;
  const overlay = document.getElementById('heroHearts');
  if (overlay) { overlay.appendChild(h); setTimeout(() => h.remove(), 3200); }
});


