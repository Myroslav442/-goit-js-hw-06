
const btnRef = document.querySelector(".change-color");
const textRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnRef.addEventListener('click', onBtnColorChange);

function onBtnColorChange() {
  const changeColor = getRandomHexColor();
  bodyRef.style.backgroundColor = changeColor;
    textRef.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

