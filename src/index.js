import gameboard from "./gameboard";
import battleShip, { Ship } from "./battleShip";

export let divsArray = [];
export let objectsArray = [];


gameboard(10, 10);
battleShip ();

/*
let list = document.querySelectorAll ('#board1 div');
function activeLink ()
{
  divsArray.forEach ((item) =>
  this.classList.add('active'));
}
list.forEach ((item) =>
item.addEventListener ('click', activeLink));
*/
