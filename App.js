<<<<<<< HEAD
const keys = document.querySelectorAll(".key");
const info = document.querySelector(".info__button");
const wrapper = document.querySelector(".app-wrapper");
let infoAdded = false;

const hotKeys = [
  { id: 1, name: "q", value: 81 },
  { id: 2, name: "w", value: 87 },
  { id: 3, name: "e", value: 69 },
  { id: 4, name: "r", value: 82 },
  { id: 5, name: "t", value: 84 },
  { id: 6, name: "y", value: 89 },
  { id: 7, name: "u", value: 85 },
  { id: 8, name: "i", value: 73 },
  { id: 9, name: "o", value: 79 },
  { id: 10, name: "p", value: 80 },
  { id: 11, name: "[", value: 219 },
  { id: 12, name: "]", value: 221 },
  { id: 13, name: "a", value: 65 },
  { id: 14, name: "s", value: 83 },
  { id: 15, name: "d", value: 68 },
  { id: 16, name: "f", value: 70 },
  { id: 17, name: "g", value: 71 },
  { id: 18, name: "h", value: 72 },
  { id: 19, name: "j", value: 74 },
  { id: 20, name: "k", value: 75 },
  { id: 21, name: "l", value: 76 },
  { id: 22, name: ";", value: 186 },
  { id: 23, name: `'`, value: 222 },
  { id: 24, name: `z`, value: 90 },
];

function handleSounds(num) {
  const id = `./${num}.ogg`;
  console.log(id);
  new Audio(id).play();
}

keys.forEach((key, i) => {
  const num = i + 1;

  key.addEventListener("click", () => handleSounds(num));
});
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  const key = hotKeys.find((item) => item.value === e.keyCode);
  if (!key) return;
  console.log(key);
  handleSounds(key.id);
});

info.addEventListener("click", () => {
  if (!infoAdded) {
    const description = document.createElement("div");
    wrapper.appendChild(description);
    description.classList.add("description");
    infoAdded = true;
  } else {
    const description = document.querySelector(".description");
    if (description) {
      wrapper.removeChild(description);
    }
    infoAdded = false;
  }
});
=======
const keys = document.querySelectorAll(".key");

const sounds = [
  "./1.ogg",
  "./2.ogg",
  "./3.ogg",
  "./4.ogg",
  "./5.ogg",
  "./6.ogg",
  "./7.ogg",
];

const hotKeys = [
  { id: 1, name: "q", value: 81 },
  { id: 2, name: "w", value: 87 },
  { id: 3, name: "e", value: 69 },
  { id: 4, name: "r", value: 82 },
  { id: 5, name: "t", value: 84 },
  { id: 6, name: "y", value: 89 },
  { id: 7, name: "u", value: 85 },
  { id: 8, name: "i", value: 73 },
  { id: 9, name: "o", value: 79 },
  { id: 10, name: "p", value: 80 },
  { id: 11, name: "[", value: 219 },
  { id: 12, name: "]", value: 221 },
  { id: 13, name: "a", value: 65 },
  { id: 14, name: "s", value: 83 },
  { id: 15, name: "d", value: 68 },
  { id: 16, name: "f", value: 70 },
  { id: 17, name: "g", value: 71 },
  { id: 18, name: "h", value: 72 },
  { id: 19, name: "j", value: 74 },
  { id: 20, name: "k", value: 76 },
  { id: 21, name: "l", value: 76 },
  { id: 22, name: ";", value: 186 },
  { id: 23, name: `'`, value: 222 },
  { id: 24, name: `z`, value: 90 },
];

function handleSounds(num) {
  const id = `./${num}.ogg`;
  console.log(id);
  // console.log(element.value);
  // console.log(element.name);

  new Audio(id).play();
}

// hotKeys.forEach((keyNumber, i) => {
//   const num = i + 1;
//   const hot = hotKeys[num];
//   return keyNumber;
// });

keys.forEach((key, i) => {
  const num = i + 1;

  key.addEventListener("click", () => handleSounds(num));
});
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  const key = hotKeys.find((item) => item.value === e.keyCode);
  if (!key) return;
  console.log(key);
  handleSounds(key.id);
});
>>>>>>> 3119141c56a059cec4da5d8f1513ccf936ae481f
