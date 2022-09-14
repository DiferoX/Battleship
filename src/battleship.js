import { arrayBoardCPU, arrayBoardPlayer1 } from ".";
import { objectsArrayCPU, objectsArrayPlayer1 } from ".";
import { Ship } from "./object";

function battleship ()
{
  let listBP1 = document.querySelectorAll ('#boardCPU div');
  function activeLink ()
  {
    arrayBoardCPU.forEach ((item) =>
    this.classList.add('active'));
  }
  listBP1.forEach ((item) =>
  item.addEventListener ('click', activeLink));
}

export default battleship;
