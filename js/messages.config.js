// ══════════════════════════════════════════════════════════════
// ✏️  MESSAGES FROM LOVED ONES — edit everything here
//
// Each message is an object with these fields:
//
//   avatar  — emoji or URL to a small image          (required)
//   from    — sender name                            (required)
//   text    — the message text                       (required)
//   photo   — path to a photo, e.g. "images/mom.jpg" (optional)
//   audio  — path to audio, e.g. "audio/msg_mom.mp3" (optional)
//
// Rules:
//   • photo, video, audio are all optional — leave them out if not needed
//   • if multiple media fields exist, ALL are shown (text → photo → video → audio)
//   • put image files in the  images/  folder
//   • put video files in the  videos/  folder
//
// To ADD a message   → copy any block below and paste it inside the array
// To REMOVE one      → delete its { ... } block (and the trailing comma)
// ══════════════════════════════════════════════════════════════

const MESSAGES = [

// ── text + photo ────────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Mummy",
    text   : "Mera shararti bachha kab 29 saal ka ho gaya, pata hi nahi chala itni jaldi badda ho gaya ❤️\n\nMujhe tujhe Marne mein aaj bhi utna hi majaa aata hai jitna pehle aata tha 😄❤️\n\nHamaare liye to tu hamaari jaan hai ❤️ hamaara laddoo gopal hai ❤️ mera shantu ❤️\n\nBhagwaan kare tujhe meri bhi umar lag jaye aur tu din dugni aur raat choguni tarakki kare ❤️\n\nTere saath hi hamaari khushi hai — tu khush hai to hum bhi khush hai ❤️\n\nBhagwan tujhe lambi umar aur khushaal jindagi de ❤️\n\nTu jiye hajaaro saal, saal ke din ho pachaas hajaar ❤️\n\nI love you so much ❤️❤️❤️\n\nHappy Birthday my baby! 🎂❤️",
    photo  : "images/MUMMY.jpg",
  },

   // ── text + photo ────────────────────────────────────────────
  {
    avatar : "👨",
    from   : "Papa",
    text   : "Thakur ji blessed us with the best part of our soul that's our life our son, we loves you the most. Both of us bless you for your birthday.\n\nWishes you happiest birthday.\n\nIts also the time to thanks you for completing our family by choosing such a darling daughter for us.\n\nHappy happy ❤️❤️❤️ birthday\n\nThakur ji bless you all the happiness & makes your wishes true",
    photo  : "images/PAPA.jpg",
  },

  

  // ── photo + video ───────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Mother-in-law",
    text   : "",
    photo  : "images/Mother-in-law.JPG",
    video  : "videos/mother-in-law.mp4",
  },

  // ── photo + video ───────────────────────────────────────────
  {
    avatar : "👨",
    from   : "Father-in-law",
    text   : "",
    photo  : "images/Father-in-law.JPG",
    video  : "videos/father-in-law.mp4",
  },
 
  // ── text only ──────────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Geetu Bhabi",
    text   : "Happy Birthday to my wonderful devar 🤍\n\nYour calm nature, kind heart, and caring presence make you truly special to all of us. I feel really lucky to have you as a part of our family.\n\nI still remember our Vrindavan trip—amidst that huge crowd, the way you asked me to come forward and made sure I felt safe and secure… it meant so much more than words can express.\n\nAnd our Manali trip on New Year—winning that game together and secretly enjoying making our spouses a little jealous 😄… those moments will always stay close to my heart.\n\nThank you for always being so thoughtful and dependable. May your life be filled with happiness, success, and all the love you deserve.\n\nWishing you a beautiful year ahead 🌼✨\n\nKeep shining… but don't forget, I'm still the favorite in pictures 😉💛",
    photo  : "images/geetu_bhabi.jpeg",
  },

 

  // ── text + photo ────────────────────────────────────────────
  {
    avatar : "👦",
    from   : "Vishu Bhaiya",
    text   : "Happy Birthday to my childhood partner-in-crime, my forever cricket buddy! 🏏❤️\n\nFrom the days when we made you do only ball picking and never let you bat (yes, we were unfair 😄), to all those carefree childhood memories, every moment with you is unforgettable.\n\nAnd how can I forget you bringing that yummy kheer made by mami to my home… only to start eating it yourself as soon as you arrived! 😂 Some things never change.\n\nYou have always been more than a cousin — a friend, a teammate, and a big part of my best memories. Wishing you a life full of happiness, success and endless reasons to smile.\n\nAnd now seeing you with the love of your life makes me even happier — may your bond always stay full of love, laughter and togetherness. Lots of love to you both, and a very happy birthday, bhai! 🎂✨",
    photo  : "images/vishu_bhaiya.jpeg",
  },

  

  // ── video ───────────────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Mami",
    text   : "",
    video  : "videos/mami.mp4",
  },

  // ── video ───────────────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Nikita (Cousin Sister)",
    text   : "♥️ Wishing you the very happy birthday hope for the life full of joys 🎂\n\nMay this year brings you continued success, good health and peace 🔥\n\nMay this new phase of life after marriage bring you greater happiness, stability and fulfillment 🎂\n\nI hope the year ahead adds more happiness to your success 🥰\n\nHave a wonderful year ahead ✨",
    video  : "videos/nikita.mp4",
  },

  // ── photo + video ───────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Garima",
    text   : "",
    photo  : "images/garima.jpg",
    video  : "videos/garima.mp4",
  },

  // ── text + photo ────────────────────────────────────────────
  {
    avatar : "🧑",
    from   : "Munshaa",
    text   : "Janamdin di bhot bhot vdayi hoye howe mere bche nu. Rab chardikala vch rkhe tainu. Jam jam bachya da der lade tu. 🤣🤣 🎂 🍻 🎉",
    photo  : "images/munshaa.JPG",
  },

];
