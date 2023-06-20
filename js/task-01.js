const categoriesList = document.querySelector('#categories');
const firstCategoryItem = categoriesList.firstElementChild;

console.log('Number of categories:', categoriesList.childElementCount);

let currentItem = firstCategoryItem;
while (currentItem) {
  const categoryTitle = currentItem.querySelector('h2').textContent;
  const categoryElements = currentItem.querySelectorAll('li').length;
  
  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements);
  
  currentItem = currentItem.nextElementSibling;
}