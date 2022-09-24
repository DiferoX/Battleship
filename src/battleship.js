import { arrayBoardCPU, arrayBoardPlayer1 } from ".";
import { objectsArrayCPU, objectsArrayPlayer1 } from ".";
import { Ship } from "./object";


function moveCPUVsP1 (newArray)
{
  let num = Math.floor(Math.random() * newArray.length);
  let id = newArray[num];
  let empty = true;

  objectsArrayPlayer1.forEach (object => 
  {
    object.coords.forEach (element =>
    {
      if (element.coord === id)
      {
        //arrayBoardPlayer1[element.coord].style.backgroundColor = 'red';
        //arrayBoardPlayer1[element.coord].classList.remove('empty');
        arrayBoardPlayer1[element.coord].classList.add('active');
        element.hit = true;
        element.shipDiv.classList.add('hit');
        empty = false;
        object.onHit();
      }
    });
  });
  if (empty === true)
  {
    arrayBoardPlayer1[id].classList.remove('empty');
    arrayBoardPlayer1[id].classList.add('fail');
  }
  arrayBoardPlayer1[id].style.cursor = 'not-allowed';
  newArray.splice(num, 1);
  //console.log (newArray);
}

function moveP1VsCPU (newArray)
{
  let listCPU = document.querySelectorAll ('#boardCPU fieldset');

  listCPU.forEach ((item) =>
  {
    item.classList.remove('onShip');
    item.classList.add('empty');
  });

  function activeLink ()
  {
    let id = Number(this.lastChild.textContent);
    let empty = true;

    objectsArrayCPU.forEach (object => 
    {
      object.coords.forEach (element =>
      {
        if (element.coord === id)
        {
          //arrayBoardPlayer1[element.coord].style.backgroundColor = 'red';
          arrayBoardCPU[element.coord].classList.remove('empty');
          arrayBoardCPU[element.coord].classList.add('active');
          element.hit = true;
          element.shipDiv.classList.add('hit');
          empty = false;
          object.onHit();
        }
      });
    });
    if (empty === true)
    {
      arrayBoardCPU[id].classList.remove('empty');
      arrayBoardCPU[id].classList.add('fail');
    }
    arrayBoardCPU[id].disabled="disabled";
    arrayBoardCPU[id].style.cursor = 'not-allowed';
    moveCPUVsP1(newArray);
  }
  listCPU.forEach ((item) =>
  item.addEventListener ('click', activeLink));
}

function battleship ()
{
  let newArray = [];
  let listBP1 = document.querySelectorAll ('#boardPlayer1 fieldset');

  for (let i = 0; i < arrayBoardPlayer1.length; i++)
    newArray[i] = Number(arrayBoardPlayer1[i].lastChild.textContent);

  listBP1.forEach ((item) =>
  {
    item.disabled="disabled";
    //item.classList.add('empty');
    item.style.cursor = 'not-allowed';
  });

  moveP1VsCPU (newArray);
}

export default battleship;
