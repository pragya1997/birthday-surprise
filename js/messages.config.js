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
    avatar : "👵",
    from   : "Dadi Ji",
    text   : "Jeete raho, khush raho, beta. Meri duaain hamesha tumhare saath hain. Bhagwan tumhe lambi umar aur khushi de. ❤️",
  },

  // ── text + photo ────────────────────────────────────────────
  {
    avatar : "👦",
    from   : "Little Brother",
    text   : "Bro, happy birthday! You're old now lol. But seriously — you're my hero. Always will be. Treat yourself today.",
    photo  : "images/msg_bro.jpg",
  },

];
