import { arrayBoardCPU, arrayBoardPlayer1 } from ".";

let boardPlayer1 = document.querySelector ('#boardPlayer1');
let boardCPU = document.querySelector ('#boardCPU');


function gameboard (rows, cols)
{
  boardPlayer1.style.setProperty ('--grid-rows', rows);
  boardPlayer1.style.setProperty ('--grid-cols', cols);

  boardCPU.style.setProperty ('--grid-rows', rows);
  boardCPU.style.setProperty ('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++)
  {
    //let divsBoardPlayer1 = document.createElement('div');
    let divsBoardPlayer1 = document.createElement('fieldset');
    let txtBoardPlayer1 = document.createElement('p');
    txtBoardPlayer1.textContent = i;
    arrayBoardPlayer1[i] = divsBoardPlayer1;
    boardPlayer1.appendChild(divsBoardPlayer1);
    divsBoardPlayer1.appendChild(txtBoardPlayer1)

    //let divsBoardCPU = document.createElement('div');
    let divsBoardCPU = document.createElement('fieldset');
    let txtBoardCPU = document.createElement('p');
    txtBoardCPU.textContent = i;
    arrayBoardCPU[i] = divsBoardCPU;
    boardCPU.appendChild(divsBoardCPU);
    divsBoardCPU.appendChild(txtBoardCPU)
  }
}

export default gameboard;
