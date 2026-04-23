// ===== LANDING PAGE JS =====

// Guard: redirect to password page if not unlocked
if (!sessionStorage.getItem('unlocked')) {
  window.location.replace('password.html');
}

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


