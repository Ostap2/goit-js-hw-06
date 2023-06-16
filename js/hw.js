const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');

  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements.length);
});




const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  ingredientsList.appendChild(listItem);
});




