const inputEL = document.querySelector('#name-input');
console.log(inputEL.value);
const outputEl = document.querySelector('#name-output');

inputEL.addEventListener("input", (some) => {
    outputEl.textContent = some.currentTarget.value;
    if (outputEl.textContent.length === 0) {
        outputEl.textContent = "Anonymous";
    }
})