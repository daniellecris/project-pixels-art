// const pixelBoard = document.getElementById('pixel-board');

// const row = 5;
// const columns = 5;

// for (let index = 0; index < row; index += 1) {
//   const pixelLinha = document.createElement('div');
//   for (let i = 0; i < columns; i += 1) {
//     const box = document.createElement('div');
//     box.className = 'pixel';
//     pixelLinha.appendChild(box);
//   }
//   pixelBoard.appendChild(pixelLinha);
// }

//const inicialCor = document.getElementById('color-one');
//inicialCor.classList.add('selected');

const oneColor = document.getElementById('color-one');
oneColor.classList.add('selected');

const twoColor = document.getElementById('color-two');
const threeColor = document.getElementById('color-three');
const fourColor = document.getElementById('color-four');

function addColor(event) {
  const colorElement = document.querySelector('.selected');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
}

oneColor.addEventListener('click', addColor);
twoColor.addEventListener('click', addColor);
threeColor.addEventListener('click', addColor);
fourColor.addEventListener('click', addColor);

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada
const selectedColor = document.querySelector('.selected');