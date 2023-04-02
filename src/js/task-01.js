const categoriesRef = document.querySelector('#categories');
const itemsRef = categoriesRef.children;

const amountCategories = `Number of categories:${itemsRef.length}`;
console.log(amountCategories)

for (const title of itemsRef) {
    const category = `Category: ${title.firstElementChild.textContent}`
    console.log(category)
    const elements = `Elements: ${title.querySelector('ul').children.length}`
    console.log(elements)
}
