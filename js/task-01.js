const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categories.length);

Array.from(categories).forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.getElementsByTagName('li');

  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements.length);
});