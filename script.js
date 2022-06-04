const textInput = document.querySelector('#text-input');
const boxText = document.querySelector('#meme-text');

function textInsert() {
  boxText.innerText = textInput.value;
}

textInput.addEventListener('input', textInsert)