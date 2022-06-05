const textInput = document.querySelector('#text-input');
const boxText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const boxImg = document.querySelector('#meme-image')
const imgContainer = document.querySelector('#meme-image-container')
function textInsert() {
  boxText.innerText = textInput.value;
}

textInput.addEventListener('input', textInsert)

function insertImg() {
  const image = URL.createObjectURL(inputImg.files[0]);
  boxImg.src = image;
}

inputImg.addEventListener('input', insertImg)