const value = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrementCounter = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const incrementCounter = () => {
    counterValue += 1;
    value.textContent = counterValue;
}


decrementButton.addEventListener('click',decrementCounter);
incrementButton.addEventListener('click',incrementCounter);

