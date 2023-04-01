const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


for (const ingredient of ingredients) {
  const nameRef = document.createElement('li');
  nameRef.textContent = ingredient;
  nameRef.classList.add('item');
  console.log(nameRef)
  
  ingredientsRef.append(nameRef);
}