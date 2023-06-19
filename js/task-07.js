const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


text.style.fontSize = fontSizeControl.value + 'px';


fontSizeControl.addEventListener('input', () => {
  text.style.fontSize = fontSizeControl.value + 'px';
});
