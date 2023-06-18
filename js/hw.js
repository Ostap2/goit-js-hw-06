// 1
const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');

console.log('Number of categories:', categories.length);

Array.from(categories).forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.getElementsByTagName('li');

  console.log('Category:', categoryName);
  console.log('Elements:', categoryElements.length);
});



// 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

listItems.forEach(listItem => {
  ingredientsList.appendChild(listItem);
});


// 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');

const galleryItems = images.map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
});

gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));


// 4

const counterValue = document.getElementById("value");
const decrementButton = document.querySelector("button[data-action='decrement']");
const incrementButton = document.querySelector("button[data-action='increment']");

let currentValue = 0;

decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementButton.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

// 5

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
});

// 6


const input = document.getElementById('validation-input');
const expectedLength = input.dataset.length;



input.addEventListener('blur', (event) => {
  const inputValue = event.target.value.trim();

  if (inputValue.length === Number(expectedLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});



// 7

const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = fontSize + 'px';
});
// 8

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields');
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(loginData);
    loginForm.reset();
  }
});

// 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const widget = document.querySelector('.widget');
const colorSpan = widget.querySelector('.color');
const changeColorButton = widget.querySelector('.change-color');

changeColorButton.addEventListener('click', function() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

// 10
