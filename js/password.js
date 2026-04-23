// ===== PASSWORD PAGE JS =====
// js/password.js

// Clear any previous unlock so back+forward doesn't bypass the password
sessionStorage.removeItem('unlocked');

// ═══════════════════════════════════════════════════════════
// ✏️ EDIT: The correct password (case + spaces are ignored automatically)
// ═══════════════════════════════════════════════════════════
const CORRECT_ANSWERS = [
  'prithviplanetpark',
];

// ✏️ EDIT: "Close enough" words — if the input contains any of these
// (after stripping spaces and lowercasing) the hint message shows instead
const CLOSE_FRAGMENTS = [
  'prithviplanet',
  'planetpark',
  'prithvi',
];

// ✏️ EDIT: Where to go after correct password
const NEXT_PAGE = 'landing.html';

// ── State ──
let wrongCount  = 0;
let hintIndex   = 0;
const hintItems = document.querySelectorAll('.hint-item');

// ── Petals ──
const petalSymbols = ['🌸', '🌺', '💮', '🌹', '💐'];
function spawnPetal() {
  const c = document.getElementById('petalsPw');
  if (!c) return;
  const p = document.createElement('span');
  p.className = 'pw-petal';
  p.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
  p.style.cssText = `
    left: ${Math.random() * 100}vw;
    font-size: ${Math.random() * 12 + 10}px;
    animation-duration: ${Math.random() * 5 + 8}s;
    animation-delay: 0s;
    opacity: ${Math.random() * .4 + .3};
  `;
  c.appendChild(p);
  setTimeout(() => p.remove(), 14000);
}
setInterval(spawnPetal, 700);
for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 300);

// ── Side decorative bubbles ──
const bubbleColors = [
  ['#e8175d','#ff6b9d'],
  ['#7c3aed','#a855f7'],
  ['#0ea5e9','#38bdf8'],
  ['#f59e0b','#fcd34d'],
  ['#10b981','#34d399'],
  ['#6366f1','#818cf8'],
];

function buildSideBubbles(id, count) {
  const col = document.getElementById(id);
  if (!col) return;
  for (let i = 0; i < count; i++) {
    const [c1, c2] = bubbleColors[i % bubbleColors.length];
    const size = Math.random() * 40 + 30;
    const b = document.createElement('div');
    b.className = 'sb';
    b.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random() * 85}%;
      left:${Math.random() * 50}%;
      --c1:${c1}; --c2:${c2};
      animation-duration:${Math.random() * 3 + 3}s;
      animation-delay:${Math.random() * 2}s;
    `;
    col.appendChild(b);
  }
}
buildSideBubbles('leftBubbles', 7);
buildSideBubbles('rightBubbles', 7);

// ── Reveal hints one by one ──
function revealHint() {
  const exhausted = document.getElementById('hintExhausted');
  if (hintIndex >= hintItems.length) {
    exhausted.style.display = 'block';
    document.getElementById('hintToggle').style.display = 'none';
    return;
  }
  hintItems[hintIndex].style.display = 'list-item';
  hintIndex++;
  if (hintIndex >= hintItems.length) {
    document.getElementById('hintToggle').textContent = '💡 No more hints';
    document.getElementById('hintToggle').disabled = true;
  }
}

// ── Check password ──
function normalise(str) {
  return str.toLowerCase().replace(/\s+/g, '');
}

function checkPassword() {
  const input = document.getElementById('pwInput');
  const triesText = document.getElementById('triesText');
  const raw = input.value.trim();
  const val = normalise(raw);

  if (!val) {
    showFeedback('Type something first 💭', 'wrong');
    return;
  }

  // ── Tier 1: exact match ──
  if (CORRECT_ANSWERS.some(a => normalise(a) === val)) {
    handleCorrect();
    return;
  }

  // ── Tier 2: close match ──
  if (CLOSE_FRAGMENTS.some(f => val.includes(normalise(f)))) {
    showComicBubble('You are just there… 😏');
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = 'feedback';
    input.classList.add('shake-input');
    setTimeout(() => input.classList.remove('shake-input'), 500);
    return;
  }

  // ── Tier 3: wrong ──
  wrongCount++;
  const wrongs = [
    "you should know this 😏",
    "guess again baby 💅",
    "who's this?? 👀",
    "my smart boy… try harder 🧠",
  ];
  showComicBubble(wrongs[(wrongCount - 1) % wrongs.length]);
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  if (wrongCount >= 3) {
    triesText.textContent = `${wrongCount} tries so far — check the hints!`;
  }
  input.style.animation = 'none';
  void input.offsetWidth;
  input.style.animation = '';
  input.classList.add('shake-input');
  setTimeout(() => input.classList.remove('shake-input'), 500);
}

function showFeedback(msg, type) {
  const fb = document.getElementById('feedback');
  fb.textContent = msg;
  fb.className = 'feedback ' + (type || '');
}

function handleCorrect() {
  const overlay = document.getElementById('unlockOverlay');
  const hearts  = document.getElementById('unlockHearts');

  // Fill hearts
  hearts.innerHTML = ['❤️','💕','💗','💖','🌸'].map(h => `<span>${h}</span>`).join('');

  overlay.classList.add('show');
  overlay.style.display = 'flex';

  // Navigate after a beat
  sessionStorage.setItem('unlocked', '1');
  setTimeout(() => { window.location.href = NEXT_PAGE; }, 2200);
}

// ── Comic bubble helpers ──
let _bubbleSide = 'left';
function showComicBubble(msg) {
  const cb = document.getElementById('comicBubble');
  cb.classList.remove('show', 'left', 'right');
  cb.textContent = msg;
  void cb.offsetWidth; // reflow for re-animation
  cb.classList.add(_bubbleSide, 'show');
  _bubbleSide = _bubbleSide === 'left' ? 'right' : 'left';
}
function dismissComicBubble() {
  const cb = document.getElementById('comicBubble');
  cb.classList.remove('show');
}

// ── Enter key ──
const _pwInput = document.getElementById('pwInput');
_pwInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') checkPassword();
});
_pwInput.addEventListener('focus', dismissComicBubble);
_pwInput.addEventListener('click', dismissComicBubble);
