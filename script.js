const pixelBoard = document.getElementById('pixel-board');

const row = 5;
const columns = 5;

for (let index = 1; index <= row; index += 1) {
  const pixelLinha = document.createElement('div');
  for (let i = 0; i < columns; i += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    pixelLinha.appendChild(box);
  }
  pixelBoard.appendChild(pixelLinha);
}

//define cor inicial
const oneColor = document.getElementById('color-one');
oneColor.classList.add('selected');

const twoColor = document.getElementById('color-two');
const threeColor = document.getElementById('color-three');
const fourColor = document.getElementById('color-four');

//Adiciona e remove Classe selected nas cores selecionadas
function addClass(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

oneColor.addEventListener('click', addClass);
twoColor.addEventListener('click', addClass);
threeColor.addEventListener('click', addClass);
fourColor.addEventListener('click', addClass);

let corSelect = document.querySelector('.selected').style.background;//guarda a cor selecionada

//passar por quadro de pixels
const pixels = document.querySelectorAll('.pixel');

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', preencheBox());
}

// Clicar na cor escolhida e preencher quadro
function preencheBox(corSelect) {
  pixels.style.background = corSelect;
}

//Limpar Pixels
let btnLimpar = document.getElementById('clear-board');
btnLimpar.addEventListener('click', clear);

function clear() {
  for (let index = 0; index <= 25; index+=1) {
    let pixelClear = document.querySelectorAll('.pixel')[index];
    pixelClear.style.background = "white";
  }
}
