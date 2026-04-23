// ===== BUBBLES PAGE JS =====

// ══════════════════════════════════════════════════════════
// ✏️  EDIT YOUR OPEN WHEN LETTER CONTENT HERE
// ══════════════════════════════════════════════════════════
const LETTERS = [
  {
    title: "Open When You Miss Me",
    body: `<p>Close your eyes for a moment. Take a breath. I am there in that breath — in the warmth that fills your chest when you breathe in slowly.</p>
<p>I am in every song that makes you smile without warning. I am in the way the sunlight comes through the window at that exact angle you love.</p>
<p>I am not far. I am never far. Pick up your phone and call me. Or don't — because I am already with you. I carry you with me everywhere I go, and I know, in some way you cannot explain, you carry me too. ♡</p>`
  },
  {
    title: "Open When You're Having a Bad Day",
    body: `<p>Oh my love. Today is hard. I know. Some days just decide they don't want to cooperate — and that's okay. You don't have to be okay right now.</p>
<p>But I want you to know this: you have survived every hard day that came before this one. Every single one. And you are still here, still beautiful, still so incredibly you.</p>
<p>Let yourself feel it. Then let me make you tea, hold your hand, or just sit beside you in silence. You don't have to carry this alone. You never do. ♡</p>`
  },
  {
    title: "Open When You Need to Laugh",
    body: `<p>Remember that one time you tripped over absolutely nothing and looked around to see if anyone noticed? I had seen everything. Every single thing. 😂</p>
<p>Or the time you were SO confident about that trivia answer. So. Confident. I still think about it whenever I need cheering up.</p>
<p>Life is wonderfully silly sometimes. You are wonderfully silly sometimes. And I love every ridiculous, beautiful, funny moment of it. Now go find something to laugh at — you have my full permission. 😄 ♡</p>`
  },
  {
    title: "Open When You Doubt Yourself",
    body: `<p>Stop. Right there. I need you to listen to me properly.</p>
<p>You are more capable than you know. More brilliant than you give yourself credit for. More loved than you could ever fully realise. The doubt you're feeling right now — it is lying to you. It does that.</p>
<p>I have watched you do hard things. I have watched you grow, stumble, and rise again. I believe in you with every cell I have — not because I have to, but because I have seen what you are made of. And it is extraordinary.</p>
<p>Now go. Show the world what I already know. ♡</p>`
  },
  {
    title: "Open When You Achieve Something",
    body: `<p>YES!!! I am SO proud of you I could burst!!! 🎉🎉🎉</p>
<p>You did the thing. The thing that felt impossible, the thing you stayed up late for, the thing that asked so much of you — and you did it. Look at you.</p>
<p>I want to celebrate every single part of this with you. The late nights, the doubt, the effort, the moment it all came together. You earned this. Every bit of it.</p>
<p>Go celebrate properly. You deserve a whole week of pure joy. ♡</p>`
  },
  {
    title: "Open When You Feel Loved",
    body: `<p>Good. Stay in this feeling. Let it wash over you and settle into your bones.</p>
<p>You are loved. By me, deeply and always. By the people around you who know what a gift you are. By the universe that put you here, exactly here, for a reason.</p>
<p>This feeling you're feeling right now? This is the truest thing. Hold on to it. Come back to it whenever you forget.</p>
<p>Because you are loved — on the ordinary days, the hard days, the brilliant days — always, always, always. ♡</p>`
  }
];

// ── Petals ──
const BPETALS = ['🌸','🌺','💮','🌹','💐'];
const BUB_COLORS = [
  ['#ffc2d4','#ffb3c6'],['#bde0fe','#a2d2ff'],['#caffbf','#a8edaf'],
  ['#ffd6a5','#ffca80'],['#e2d4f0','#cdb4db'],['#fce4ec','#f4a5b5'],
  ['#fff0a0','#ffe066'],['#b5ead7','#85d6b8'],
];

function spawnPetal() {
  const c = document.getElementById('petalsWrap');
  if (!c) return;
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = BPETALS[Math.floor(Math.random() * BPETALS.length)];
  p.style.cssText = `left:${Math.random()*100}vw;font-size:${Math.random()*12+8}px;animation-duration:${Math.random()*7+8}s;opacity:${Math.random()*.4+.25};`;
  c.appendChild(p);
  setTimeout(() => p.remove(), 16000);
}
setInterval(spawnPetal, 800);
for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 400);

// ── Side decorative bubbles ──
function buildSideDeco(id, count) {
  const col = document.getElementById(id);
  if (!col) return;
  for (let i = 0; i < count; i++) {
    const [c1, c2] = BUB_COLORS[i % BUB_COLORS.length];
    const size = Math.random() * 55 + 28;
    const b = document.createElement('div');
    b.className = 'sd-bub';
    b.style.cssText = `width:${size}px;height:${size}px;top:${3+Math.random()*90}%;left:${Math.random()*55}%;--c1:${c1};--c2:${c2};opacity:${Math.random()*.3+.3};animation-duration:${Math.random()*4+3}s;animation-delay:${Math.random()*3}s;`;
    col.appendChild(b);
  }
}
buildSideDeco('leftDeco', 10);
buildSideDeco('rightDeco', 10);

// ── Bubble clicks ──
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('click', () => openModal(bubble.dataset.modal));
});

// ── Modal open / close ──
function openModal(name) {
  const m = document.getElementById('modal-' + name);
  if (!m) return;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (name === 'final') setTimeout(fireConfetti, 450);
}

function closeModal(name) {
  const m = document.getElementById('modal-' + name);
  if (!m) return;
  m.classList.remove('open');
  m.querySelectorAll('video,audio').forEach(el => el.pause());
  document.body.style.overflow = '';
}

// Backdrop click closes
document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', e => {
    if (e.target === m) closeModal(m.id.replace('modal-', ''));
  });
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id.replace('modal-', '')));
    closeLightbox();
  }
});

// ── Tab switcher ──
function switchTab(btn, panelId) {
  const row = btn.closest('.tab-row');
  if (row) row.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const box = btn.closest('.modal-box');
  if (box) box.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.remove('hidden');
}

// ── Lightbox ──
function openLightbox(item) {
  const img = item.querySelector('img');
  const cap = item.querySelector('.ph-cap');
  document.getElementById('lbImg').src = img.src;
  document.getElementById('lbCap').textContent = cap ? cap.textContent : '';
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Letters ──
function openLetter(index) {
  const letter = LETTERS[index];
  if (!letter) return;
  document.getElementById('letterTitle').textContent = letter.title;
  document.getElementById('letterBody').innerHTML   = letter.body;
  openModal('letter-read');
}

// ── Confetti ──
window.fireConfetti = function() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const box = canvas.parentElement;
  canvas.width  = box.offsetWidth;
  canvas.height = box.offsetHeight;
  const ctx = canvas.getContext('2d');

  let pieces = [];
  const COLORS = ['#f4a5b5','#e07a96','#fce4ec','#ffd6a5','#bde0fe','#cdb4db','#caffbf','#d4a574','#fff0a0'];

  function spawn(n) {
    for (let i = 0; i < n; i++) {
      pieces.push({
        x: canvas.width * (.1 + Math.random() * .8), y: Math.random() * -20,
        r: Math.random() * 8 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random()-.5)*5, vy: Math.random()*4+2,
        angle: Math.random()*Math.PI*2, vr: (Math.random()-.5)*8,
        alpha: 1, gravity: Math.random()*.1+.04,
        shape: ['circle','square','heart'][Math.floor(Math.random()*3)],
      });
    }
  }

  function heart(ctx, x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x, y - r*.3);
    ctx.bezierCurveTo(x+r, y-r, x+r*1.2, y+r*.5, x, y+r);
    ctx.bezierCurveTo(x-r*1.2, y+r*.5, x-r, y-r, x, y-r*.3);
    ctx.closePath();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter(p => p.alpha > .02 && p.y < canvas.height + 30);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += p.gravity;
      p.angle += p.vr * Math.PI / 180;
      if (p.y > canvas.height*.5) p.alpha = Math.max(0, p.alpha - .012);
      ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y); ctx.rotate(p.angle);
      if      (p.shape==='circle') { ctx.beginPath(); ctx.arc(0,0,p.r,0,Math.PI*2); ctx.fill(); }
      else if (p.shape==='square') { ctx.fillRect(-p.r,-p.r,p.r*2,p.r*1.4); }
      else                         { heart(ctx,0,0,p.r); ctx.fill(); }
      ctx.restore();
    });
    if (pieces.length) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  pieces = [];
  spawn(120); setTimeout(()=>spawn(100),350);
  setTimeout(()=>spawn(80),750); setTimeout(()=>spawn(60),1300);
  tick();
};
