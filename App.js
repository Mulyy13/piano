const keys = document.querySelectorAll(".key");

// const sounds = [
//   "/1.ogg",
//   "/2.ogg",
//   "/3.ogg",
//   "/4.ogg",
//   "/5.ogg",
//   "/6.ogg",
//   "/7.ogg",
// ];

const hotKeys = [
  { name: "q", value: 81 },
  { name: "w", value: 81 },
  { name: "e", value: 69 },
  { name: "r", value: 82 },
  { name: "t", value: 84 },
  { name: "y", value: 89 },
  { name: "u", value: 85 },
  { name: "i", value: 73 },
  { name: "o", value: 79 },
  { name: "p", value: 80 },
  { name: "[", value: 219 },
  { name: "]", value: 221 },
  { name: "a", value: 65 },
  { name: "s", value: 83 },
  { name: "d", value: 68 },
  { name: "f", value: 70 },
  { name: "g", value: 71 },
  { name: "h", value: 72 },
  { name: "j", value: 74 },
  { name: "k", value: 76 },
  { name: "l", value: 76 },
  { name: ";", value: 186 },
  { name: `'`, value: 222 },
  { name: `z`, value: 90 },
];

function handleSounds(e, keyNumber, id) {
  const element = hotKeys[keyNumber];
  console.log(element.value);
  console.log(element.name);
  if (element.value === e.keyCode && element.name === e.key) {
    new Audio(id).play();
  }
}

hotKeys.forEach((keyNumber, i) => {
  const num = i + 1;
  const hot = hotKeys[num];
  return keyNumber;
});

keys.forEach((key, keyNumber, i) => {
  const num = i + 1;
  const id = `/${num}.ogg`;
  key.addEventListener("keydown", () => handleSounds(id, keyNumber));
});
