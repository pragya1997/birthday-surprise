# 🎂 Birthday Website — Setup Guide

A romantic, emotional birthday website for your husband. ❤️

---

## 📁 Folder Structure

```
birthday-website/
├── index.html          → Landing page (main page)
├── bubbles.html        → Interactive bubbles navigation page
├── final.html          → Final surprise / emotional message page
│
├── css/
│   ├── landing.css     → Styles for landing page
│   ├── bubbles.css     → Styles for bubbles + modals
│   └── final.css       → Styles for final page
│
├── js/
│   ├── landing.js      → Animations + transition for landing page
│   ├── bubbles.js      → Bubble interactions + modal content
│   └── final.js        → Confetti engine + music toggle
│
├── audio/
│   └── music.mp3       → ✏️ ADD YOUR OWN music file here
│
└── README.md           → This file
```

---

## 🚀 How to Use

1. Open `index.html` in any browser to run the website.
   No server needed — works offline!

2. To deploy online: upload the entire folder to any static host
   (Netlify, GitHub Pages, Vercel, etc.)

---

## ✏️ Customization Guide

### 1. Change Names & Messages
- **index.html** line ~23: Change `"My Love"` to your husband's name
- **index.html** line ~28: Update the romantic subtitle
- **final.html** line ~52: Update the `final-name` span with his name
- **final.html** lines ~58–80: Write your own heartfelt message

### 2. Add Your Own Photos
- **bubbles.html** Photo Gallery section (~line 48):
  Replace `src="https://picsum.photos/..."` with your photo paths
  Example: `src="photos/us_paris.jpg"`

### 3. Add Your Own Videos
- **bubbles.html** Videos section (~line 75):
  Replace YouTube embed IDs in the `src` attribute
  Format: `https://www.youtube.com/embed/YOUR_VIDEO_ID`

### 4. Update Messages From Loved Ones
- **bubbles.html** Messages section (~line 95):
  Replace names, avatars (emoji), and message text

### 5. Update Journey Timeline
- **bubbles.html** Journey section (~line 125):
  Replace dates and event descriptions with your real story

### 6. Update Future Dreams
- **bubbles.html** Dreams section (~line 165):
  Replace emojis, titles, and descriptions with your shared dreams

### 7. Update Reasons I Love You
- **js/bubbles.js** line ~49: Edit the `reasons` array

### 8. Update Open When Letters
- **js/bubbles.js** line ~72: Edit the `letters` array
  Each letter has a `title` and `body` (HTML string)

### 9. Add Background Music
- Add your MP3 file to the `audio/` folder as `music.mp3`
- The music button on the Final page will control it
- ⚠️ Browsers block autoplay — user must click the Music button

### 10. Change Birthday Date
- **index.html** line ~35: Update `birthdayDate` span text

---

## 🎨 Color Customization

Edit `css/landing.css` lines 9–16 (CSS variables):
```css
--rose:      #f4a5b5;   /* Light pink */
--rose-deep: #e07a96;   /* Deep rose */
--blush:     #fce4ec;   /* Pale blush */
--cream:     #fff8f0;   /* Warm cream */
--gold:      #d4a574;   /* Warm gold */
```

---

## 💡 Tips

- Test on mobile — it's fully responsive
- For photos, use images ~400×300px for best performance
- The confetti fires automatically on the final page + clicking the button fires more
- All fonts load from Google Fonts (needs internet)

---

Made with love ❤️
