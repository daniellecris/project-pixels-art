const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', addClass);

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

//Adiciona e remove Classe selected nas cores selecionadas
function addClass(event) {
  const colorElement = document.querySelector('.selected');
  //Verifica se o elemento selecionado é igual ao Pai, sendo verdadeiro para a função!
  //Explicação do Tonn
  if (event.target == colorPalette) return; 

  colorElement.classList.remove('selected');
  event.target.classList.add('selected'); 
}

let corSelect = document.querySelector('.selected').style.backgroundColor;//guarda a cor selecionada

const pixels = document.querySelectorAll('.pixel');
console.log(corSelect)

// Clicar na cor escolhida e preencher quadro
function preencheBox(corSelect) {
   pixels[index].style.background = corSelect;
}

// //passar por quadro de pixels
// for (let index = 0; index < pixels.length; index += 1) {
//   pixels[index].addEventListener('click', preencheBox(corSelect));
// }

// //Limpar Pixels
// let btnLimpar = document.getElementById('clear-board');
// btnLimpar.addEventListener('click', clear);

// function clear() {
//   for (let index = 0; index <= pixels.length; index+=1) {
//     //let pixelClear = document.querySelectorAll('.pixel')[index];
//     pixels[index].style.background = 'white';
//   }
// }
