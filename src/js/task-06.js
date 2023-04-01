const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener("blur", (event) => {
    console.log(event.currentTarget.value.length)


    const dataLengt = inputEl.dataset.length;
    const dataLengtNumber = Number(dataLengt);

 console.log(dataLengtNumber)
    if (event.currentTarget.value.length === dataLengtNumber) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');

    }

})

