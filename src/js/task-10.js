const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

createBtnRef.addEventListener('click', (e) => {
  inputRef.addEventListener('input', (e) => {
    const amount = e.currentTarget.value;
    createBoxes(amount);
  })
})
 

destroyBtnRef.addEventListener('click', reset); 

function reset() {
  boxesRef.remove();
}

let newBoxes = [];
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const startSize = 30;
    let size = startSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
   
  }

  boxesRef.append(...newBoxes);
   console.log(newBoxes);
}

function getAmount() {
  let amount = Number(inputRef.value);
  createBoxes(amount);
}

getAmount();


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

