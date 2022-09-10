import { divsArray } from ".";

let board1 = document.querySelector ('#board1');
let board2 = document.querySelector ('#board2');


function gameboard (rows, cols)
{
  board1.style.setProperty ('--grid-rows', rows);
  board1.style.setProperty ('--grid-cols', cols);

  board2.style.setProperty ('--grid-rows', rows);
  board2.style.setProperty ('--grid-cols', cols);

  for (let i = 0; i < (rows*cols); i++)
  {
    let divsBoard1 = document.createElement('div');
    let txtBoard1 = document.createElement('p');
    txtBoard1.textContent = i;
    divsArray[i] = divsBoard1;
    
    board1.appendChild(divsBoard1);
    divsBoard1.appendChild(txtBoard1)

    let divsBoard2 = document.createElement('div');
    board2.appendChild(divsBoard2);
  }
  //console.log(array);
}

export default gameboard;
