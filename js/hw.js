// 1
const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li');

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

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
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

const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = input.getAttribute("data-length");
  const inputValue = input.value.trim();
  const isValid = inputValue.length === parseInt(expectedLength);

  if (isValid) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

// 7

const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
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
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amountInput = controls.querySelector('input');
  const amount = parseInt(amountInput.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}