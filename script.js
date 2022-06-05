const textInput = document.querySelector('#text-input');
const boxText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const boxImg = document.querySelector('#meme-image')
const imgContainer = document.querySelector('#meme-image-container')
const redButton = document.querySelector('#fire');
const greenButton = document.querySelector('#earth');
const blueButton = document.querySelector('#water');
const buttonsSection = document.querySelector('#borderButtons');

function textInsert() {
  boxText.innerText = textInput.value;
}

textInput.addEventListener('input', textInsert)

function insertImg() {
  const image = URL.createObjectURL(inputImg.files[0]);
  boxImg.src = image;
}

inputImg.addEventListener('input', insertImg)

function addBorderRed() {
  imgContainer.style.border = '3px dashed rgb(255, 0, 0)'
}

function addBordeBlue() {
  imgContainer.style.border = '5px double rgb(0, 0, 255)'
}

function addBorderGreen() {
  imgContainer.style.border = '6px groove rgb(0, 128, 0)'
}

redButton.addEventListener('click', addBorderRed);
blueButton.addEventListener('click', addBordeBlue);
greenButton.addEventListener('click', addBorderGreen);