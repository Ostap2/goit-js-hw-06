

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

