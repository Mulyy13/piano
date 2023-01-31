const keys = document.querySelectorAll(".key");

const sounds = [
  "/1.mp3",
  "/2.mp3",
  "/3.mp3",
  "/4.mp3",
  "/5.mp3",
  "/6.mp3",
  "/7.mp3",
];

function handleSounds(id) {
  new Audio(id).play();
}
keys.forEach((key, i) => {
  const num = i + 1;
  console.log(num);
  const id = `/${num}.mp3`;
  key.addEventListener("click", () => handleSounds(id));
});
