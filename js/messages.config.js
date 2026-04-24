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

  // ── text only ──────────────────────────────────────────────
  {
    avatar : "👩",
    from   : "Mom",
    text   : "Wishing you the most beautiful birthday, my son. You deserve all the joy in the world. I'm so proud of who you are every single day — my heart is so full.",
  },

  // ── text only ──────────────────────────────────────────────
  {
    avatar : "👨",
    from   : "Dad",
    text   : "Happy Birthday, beta. Keep shining. The whole family is rooting for you. We love you more than you'll ever know.",
  },

  // ── text + photo ────────────────────────────────────────────
  {
    avatar : "👧",
    from   : "Best Friend Priya",
    text   : "You are the kindest soul I know. Here's to another year of laughing too loud and making memories that last forever. Love you loads. 🎉",
    photo  : "images/msg_priya.jpg",
  },

  // ── video message ───────────────────────────────────────────
  {
    avatar : "🧑",
    from   : "Cousin Arjun",
    text   : "Happiest of birthdays! Miss you always, yaar.",
    video  : "videos/msg_arjun.mp4",
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
    from   : "Little Brother",
    text   : "Bro, happy birthday! You're old now lol. But seriously — you're my hero. Always will be. Treat yourself today.",
    photo  : "images/msg_bro.jpg",
  },

];
