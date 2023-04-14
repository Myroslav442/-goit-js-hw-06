const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEL = document.querySelector('#ingredients');
console.log(ulEL)


const liListEl = ingredients.map((name) => {
  const liRef = document.createElement('li');
  liRef.textContent = name;
  liRef.classList.add('item');
  return liRef;
});

ulEL.append(...liListEl);

