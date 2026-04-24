// ===== BUBBLES PAGE JS =====

// ── Render message preview cards ──
function renderMessages() {
  const grid = document.getElementById('messagesGrid');
  if (!grid || typeof MESSAGES === 'undefined') return;

  grid.innerHTML = MESSAGES.map((m, i) => {
    const avatarHtml = (m.avatar.startsWith('http') || m.avatar.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))
      ? `<img class="mc-avatar-img" src="${m.avatar}" alt="${m.from}"/>`
      : `<span class="mc-avatar">${m.avatar}</span>`;
    return `
      <div class="message-card" onclick="openMsgDetail(${i})">
        ${avatarHtml}
        <span class="mc-from">${m.from}</span>
        <span class="mc-tap">Tap to open 💌</span>
      </div>`;
  }).join('');
}

// ── Open message detail modal ──
function openMsgDetail(index) {
  const m = document.getElementById('msgDetailModal');
  const body = document.getElementById('msgDetailBody');
  if (!m || !body || typeof MESSAGES === 'undefined') return;

  const msg = MESSAGES[index];
  const avatarHtml = (msg.avatar.startsWith('http') || msg.avatar.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))
    ? `<img class="mc-avatar-img" src="${msg.avatar}" alt="${msg.from}"/>`
    : `<span class="msg-detail-avatar">${msg.avatar}</span>`;

  let content = '';
  if (msg.photo) content += `<img class="msg-detail-photo" src="${msg.photo}" alt="Photo from ${msg.from}"/>`;
  if (msg.text)  content += `<p class="msg-detail-text">"${msg.text.replace(/\n/g, '<br/>')}"</p>`;
  if (msg.video) content += `<div class="msg-detail-video-wrap"><video controls autoplay muted playsinline><source src="${msg.video}" type="video/mp4"/></video></div>`;
  if (msg.audio) content += `<audio class="msg-detail-audio" controls><source src="${msg.audio}"/></audio>`;

  body.innerHTML = `
    <div class="msg-detail-header">
      ${avatarHtml}
      <span class="msg-detail-from">${msg.from}</span>
    </div>
    ${content}`;

  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Close message detail modal ──
function closeMsgDetail() {
  const m = document.getElementById('msgDetailModal');
  if (!m) return;
  m.classList.remove('open');
  // pause any media
  m.querySelectorAll('video, audio').forEach(el => el.pause());
  document.body.style.overflow = '';
}

renderMessages();

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
    closeMsgDetail();
  }
});

// ── Render letters from config ──
function renderLetters() {
  const grid = document.getElementById('lettersGrid');
  if (!grid || typeof LETTERS === 'undefined') return;
  grid.innerHTML = LETTERS.map((l, i) => `
    <div class="letter-card" onclick="openLetter(${i})">
      <div class="letter-env" style="--ec:${l.color}"><span class="env-seal">${l.seal}</span><div class="env-flap"></div></div>
      <p class="lw">Open When…</p><p class="ls">${l.label}</p>
    </div>`).join('');
}
renderLetters();

// ── Open a letter ──
function openLetter(index) {
  const letter = LETTERS[index];
  if (!letter) return;
  document.getElementById('letterTitle').textContent = letter.title;
  document.getElementById('letterBody').innerHTML   = letter.body;
  openModal('letter-read');
}
