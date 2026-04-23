// ══════════════════════════════════════════════════════════════
// ✏️  OPEN WHEN LETTERS — edit everything here
//
// Each letter is an object with these fields:
//
//   seal   — emoji shown on the envelope flap          (required)
//   color  — envelope background color (hex or css)    (required)
//   label  — short text on the card, e.g. "You miss me"(required)
//   title  — heading inside the letter                 (required)
//   body   — HTML content of the letter                (required)
//
// To ADD a letter   → copy any block and paste it inside the array
// To REMOVE one     → delete its { ... } block (and the trailing comma)
// ══════════════════════════════════════════════════════════════

const LETTERS = [

  {
    seal  : "💌",
    color : "#ffc8dd",
    label : "You miss me",
    title : "Open When You Miss Me",
    body  : `<p style="font-size:1.25rem; line-height:2; font-style:italic;">Jab bhi meri yaad aaye… bas aankhein band kar lena,<br>Main wahi milungi tumhe… bas thoda sa mehsoos kar lena,<br>Har hasi, har baat mein… main chhupi si reh jaungi,<br>Door hoon shayad abhi… par dil se kabhi door na jaungi ❤️</p>`
  },

  {
    seal  : "🌧️",
    color : "#bde0fe",
    label : "You're having a bad day",
    title : "Open When You're Having a Bad Day",
    body  : `<p style="font-size:1.25rem; line-height:2; font-style:italic;">Thak gaye ho agar… toh bas thoda sa theher jaana,<br>Sab kuch theek karne se pehle, khud ko sambhaal jaana,<br>Tum jitna sochte ho… usse kahin zyada strong ho,<br>Aur main hamesha tumhare saath hoon… yeh kabhi mat bhoolna ❤️<br><br>Tum jitna sochte ho… usse kahin zyada strong ho,<br>Har baar gir kar bhi, tum phir se uth chalte ho,<br>Yeh jo mushkilein hain na… yeh sirf waqt ka imtihaan hai,<br>Aur is imtihaan mein… mera saath hamesha tumhare saath hai ❤️<br><br>Main har kadam par tumhare saath hoon… chahe tum mehsoos karo ya nahi,<br>Tum kabhi akela nahi ho… yeh sach kabhi badalne wala nahi ❤️</p>`
  },

  {
    seal  : "",
    color : "#ffd6a5",
    label : "You doubt yourself",
    title : "Open When You Doubt Yourself",
    body  : `<p>Jab tum khud pe shaq karte ho na… mujhe thoda bura lagta hai,<br> Kyuki main tumhe us nazar se dekhti hoon jahan tum perfect ho,<br> Tum jitna sochte ho usse kahin zyada capable ho,<br> Aur main hamesha tumpe yakeen karungi ❤️</p>`
  },

  {
    seal  : "🌟",
    color : "#e2d4f0",
    label : "You achieve something",
    title : "Open When You Achieve Something",
    body  : `<p>Tumhari har chhoti badi jeet mere liye bohot special hoti hai,<br> Tum aage badhte ho toh lagta hai jaise main bhi tumhare saath badh rahi hoon,<br> Tumne jo achieve kiya hai uske peeche tumhari mehnat hai,<br> Aur main hamesha tumpe proud rahungi ❤️</p>`
  },

  {
    seal  : "❤️",
    color : "#ffeaa0",
    label : "You feel loved",
    title : "Open When You Feel Loved",
    body  : `<p>Kabhi kabhi pyaar words mein explain nahi hota,<br> Par phir bhi main kehna chahti hoon… tum mere liye kya ho,<br> Tum sirf ek part nahi ho meri life ka,<br> Tum meri life ho… meri peace, meri khushi ❤️</p>`
  },

  {
    seal  : "🌙",
    color : "#c8d6ff",
    label : "You can't sleep",
    title : "Open When You Can't Sleep",
    body  : `<p>Agar neend na aaye na, toh meri yaadon mein kho jaana,<br> Un lamhon ko yaad karna jahan hum bas saath the,<br> Main chahe paas na hoon, par meri feelings hamesha tumhare saath hain,<br> Aur tumhe chain se sulaane ke liye bas itna kaafi hai ❤️</p>`
  },

];
