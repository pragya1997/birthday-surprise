// ===== BUBBLES PAGE JS =====
// js/bubbles.js

// ---- Floating mini petals ----
const petalMini = ['🌸','💐','🌺','🌼','🏵️'];

function createMiniPetal() {
  const container = document.getElementById('petalsMini');
  if (!container) return;
  const p = document.createElement('span');
  p.classList.add('petal-m');
  p.textContent = petalMini[Math.floor(Math.random() * petalMini.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (Math.random() * 10 + 8) + 'px';
  p.style.animationDuration = (Math.random() * 8 + 8) + 's';
  p.style.opacity = Math.random() * 0.4 + 0.2;
  container.appendChild(p);
  setTimeout(() => p.remove(), 17000);
}

setInterval(createMiniPetal, 900);
for (let i = 0; i < 5; i++) setTimeout(createMiniPetal, i * 400);

// ---- Open / Close Modals ----
function openModal(section) {
  const modal = document.getElementById('modal-' + section);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Trigger any section-specific logic
  if (section === 'reasons') populateReasons();
  if (section === 'final')   { window.location.href = 'final.html'; return; }
}

function closeModal(section) {
  const modal = document.getElementById('modal-' + section);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on background click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// ---- Bubble click ----
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('click', () => {
    const section = bubble.dataset.section;
    openModal(section);
  });
});

// ---- Escape key ----
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// ---- Lightbox ----
function openLightbox(item) {
  const img = item.querySelector('img');
  const lb  = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ---- Reasons I Love You ----
// ✏️ REPLACE: Add your own reasons here
const reasons = [
  "The way your eyes light up when you talk about things you love.",
  "How you always know exactly what to say when I need to hear it.",
  "Your laugh — it's the most beautiful sound in every room.",
  "The kindness you show to everyone, without even thinking about it.",
  "How you hold my hand tighter when you feel me drift away.",
  "The way you make the most ordinary Tuesday feel special.",
  "Your strength — the quiet, steady kind that moves mountains.",
  "How you remember the little things that matter most to me.",
  "The warmth you bring to every space you walk into.",
  "That you are the first person I want to tell everything to.",
  "The way you dream so big, and make me believe in big dreams too.",
  "How you love — wholeheartedly, completely, and beautifully.",
  "Your patience — with the world, with others, and with me.",
  "The little dances you do when no one's watching. I'm always watching. 😄",
  "Simply because you are you — and that will always be enough.",
];

function populateReasons() {
  const list = document.getElementById('reasonsList');
  if (!list || list.children.length > 0) return;

  reasons.forEach((reason, i) => {
    const item = document.createElement('div');
    item.classList.add('reason-item');
    item.style.animationDelay = (i * 0.08) + 's';
    item.innerHTML = `
      <span class="reason-num">${i + 1}.</span>
      <span class="reason-text">${reason}</span>
    `;
    list.appendChild(item);
  });
}

// ---- Open When Letters ----
// ✏️ REPLACE: Write your own letter content here
const letters = [
  {
    title: "Open When You Miss Me",
    body: `<p>Close your eyes for a moment. Take a breath. I am there in that breath — in the warmth that fills your chest when you breathe in slowly.<br/><br/>
    I am in every song that makes you smile without warning. I am in the way the sunlight comes through the window at that exact angle you love. I am not far. I am never far.<br/><br/>
    Pick up your phone and call me. Or don't — because I am already with you. I carry you with me everywhere I go, and I know, in some way you cannot explain, you carry me too.</p>`
  },
  {
    title: "Open When You're Having a Bad Day",
    body: `<p>Oh my love. Today is hard. I know. Some days just decide they don't want to cooperate, and that's okay — you don't have to be okay right now.<br/><br/>
    But I want you to know this: you have survived every hard day that came before this one. Every single one. And you are still here, still beautiful, still so incredibly you.<br/><br/>
    Let yourself feel it. Then let me make you tea, or hold your hand, or sit beside you in silence. You don't have to carry this alone. You never do.</p>`
  },
  {
    title: "Open When You Need to Laugh",
    body: `<p>Remember that one time you tripped over absolutely nothing and looked around to see if anyone noticed — and I had seen everything? 😂<br/><br/>
    Or the time you were SO confident about that trivia answer. So. Confident. I still think about it when I need cheering up.<br/><br/>
    Life is so wonderfully silly sometimes. You are wonderfully silly sometimes. And I love every ridiculous, beautiful, funny moment of it all. Now go find something to laugh at. You have my full permission. 😄</p>`
  },
  {
    title: "Open When You Doubt Yourself",
    body: `<p>Stop. Right there. I need you to listen to me.<br/><br/>
    You are more capable than you know. More brilliant than you give yourself credit for. More loved than you realize. The doubt you're feeling right now — it is lying to you. It does that.<br/><br/>
    I have watched you do hard things. I have watched you grow, and stumble, and rise again. I believe in you with every cell I have. Not because I have to — because I have seen what you are made of, and it is extraordinary.<br/><br/>
    Now go. Show the world what I already know.</p>`
  },
  {
    title: "Open When You Accomplish Something",
    body: `<p>YES!!! I am SO proud of you I could burst!!! 🎉🎉🎉<br/><br/>
    You did the thing. The thing that felt impossible, the thing you stayed up late for, the thing that asked so much of you — and you did it. Look at you.<br/><br/>
    I want to celebrate every single part of this with you. The late nights, the doubt, the effort, the moment it all came together. You earned this. Every bit of it.<br/><br/>
    Go celebrate properly. You deserve a whole day of joy.</p>`
  },
  {
    title: "Open When You Feel Loved",
    body: `<p>Good. Stay in this feeling. Let it wash over you and settle into your bones.<br/><br/>
    You are loved. By me, deeply and always. By the people around you who know what a gift you are. By the universe that put you here for a reason.<br/><br/>
    This feeling you're feeling right now? This is the truest thing. Hold on to it. Come back to it whenever you forget. Because you are loved — on the ordinary days, the hard days, the brilliant days — always. ♡</p>`
  }
];

function openLetter(index) {
  const letter = letters[index];
  if (!letter) return;

  document.getElementById('letterTitle').textContent = letter.title;
  document.getElementById('letterBody').innerHTML = letter.body;

  openModal('letter-content');
}
