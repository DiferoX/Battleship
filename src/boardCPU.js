import battleship from "./battleship";
import { arrayBoardCPU } from ".";
import { objectsArrayCPU } from ".";
import { Ship } from "./object";

let sw = 0;


function addShip (ship)
{
  let forId = 0;
  sw = Math.floor(Math.random() * 2);

  while (ship.hover === true)
  {
    let id = Math.floor(Math.random() * 100);
    if ((sw === 0) && (((id + ((ship.length - 1) * 10)) < 100) && (ship.isEmpty(id, objectsArrayCPU, sw) === true)))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        arrayBoardCPU[forId].style.backgroundColor = 'red';
        arrayBoardCPU[forId].classList.add('onShip');
        ship.coords[i].coord = forId;
        forId += 10;
      }
      ship.hover = false;
    }
    else if ((sw === 1) && ((ship.valided(id) === true) && (ship.isEmpty(id, objectsArrayCPU, sw) === true)))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        arrayBoardCPU[forId].style.backgroundColor = 'red';
        arrayBoardCPU[forId].classList.add('onShip');
        ship.coords[i].coord = forId;
        forId ++;
      }
      ship.hover = false;
    }
  }
}

/*
function showShip ()
{
  list.forEach ((item) =>
  item.style.backgroundColor = 'rgba(238, 238, 238, 0.8)');

  objectsArrayCPU.forEach (object => 
  {
    object.coords.forEach (element =>
    {
      if (element.coord !== null)
      {
        arrayBoardCPU[element.coord].classList.add('onShip');
      }
    });
  });
}
*/


/* ==================== C P U ==================== */

function displayCPU ()
{
  let btnShipBigCPU = document.getElementById ('btnShipBigCPU');     // Big Ship CPU
  btnShipBigCPU.addEventListener ('click', function ()
  {
    let bigShip = new Ship();
    objectsArrayCPU.push(bigShip);
    bigShip.board = 'CPU';
    bigShip.data = 'Big';
    bigShip.shipId = 1;
    bigShip.length = 4;

    setTimeout(() => 
    {
      btnShipMedium1CPU.disabled = false;
      btnShipMedium1CPU.click();
      btnShipMedium1CPU.disabled = true;
    }, 2000);
    addShip(bigShip);
  });

  let btnShipMedium1CPU = document.getElementById ('btnShipMedium1CPU');     // Medium Ship 1 CPU
  btnShipMedium1CPU.addEventListener ('click', function ()
  {
    let mediumShip1 = new Ship();
    objectsArrayCPU.push(mediumShip1);
    mediumShip1.board = 'CPU';
    mediumShip1.data = 'Medium';
    mediumShip1.shipId = 1;
    mediumShip1.length = 3;

    setTimeout(() => 
    {
      btnShipMedium2CPU.disabled = false;
      btnShipMedium2CPU.click();
      btnShipMedium2CPU.disabled = true;
    }, 2000);
    addShip(mediumShip1);
  });

  let btnShipMedium2CPU = document.getElementById ('btnShipMedium2CPU');     // Medium Ship 2 CPU
  btnShipMedium2CPU.addEventListener ('click', function ()
  {
    let mediumShip2 = new Ship();
    objectsArrayCPU.push(mediumShip2);
    mediumShip2.board = 'CPU';
    mediumShip2.data = 'Medium';
    mediumShip2.shipId = 2;
    mediumShip2.length = 3;
    
    setTimeout(() => 
    {
      btnShipSmall1CPU.disabled = false;
      btnShipSmall1CPU.click();
      btnShipSmall1CPU.disabled = true;
    }, 2000);
    addShip(mediumShip2);
  });

  let btnShipSmall1CPU = document.getElementById ('btnShipSmall1CPU');     // Small Ship 1 CPU
  btnShipSmall1CPU.addEventListener ('click', function ()
  {
    let smallShip1 = new Ship();
    objectsArrayCPU.push(smallShip1);
    smallShip1.board = 'CPU';
    smallShip1.data = 'Small';
    smallShip1.shipId = 1;
    smallShip1.length = 2;
    
    setTimeout(() => 
    {
      btnShipSmall2CPU.disabled = false;
      btnShipSmall2CPU.click();
      btnShipSmall2CPU.disabled = true;
    }, 2000);
    addShip(smallShip1);
  });

  let btnShipSmall2CPU = document.getElementById ('btnShipSmall2CPU');     // Small Ship 2 CPU
  btnShipSmall2CPU.addEventListener ('click', function ()
  {
    let smallShip2 = new Ship();
    objectsArrayCPU.push(smallShip2);
    smallShip2.board = 'CPU';
    smallShip2.data = 'Small';
    smallShip2.shipId = 2;
    smallShip2.length = 2;
    
    setTimeout(() => 
    {
      btnShipSmall3CPU.disabled = false;
      btnShipSmall3CPU.click();
      btnShipSmall3CPU.disabled = true;
    }, 2000);
    addShip(smallShip2);
  });

  let btnShipSmall3CPU = document.getElementById ('btnShipSmall3CPU');     // Small Ship 3 CPU
  btnShipSmall3CPU.addEventListener ('click', function ()
  {
    let smallShip3 = new Ship();
    objectsArrayCPU.push(smallShip3);
    smallShip3.board = 'CPU';
    smallShip3.data = 'Small';
    smallShip3.shipId = 3;
    smallShip3.length = 2;
    
    setTimeout(() => 
    {
      btnShipSmall3CPU.classList.remove('shipActive');
    }, 2000);
    addShip(smallShip3);
    battleship();
  });
}

/* ==================== // ==================== */

function boardCPU ()
{
  //let list = document.querySelectorAll ('#boardCPU div');

  let btnList = document.querySelectorAll ('.contentShipBoard button');
  function activeBtn ()
  {
    btnList.forEach ((item) =>
    item.classList.remove('shipActive'));
    this.classList.add('shipActive');
  }
  btnList.forEach ((item) => item.addEventListener ('click', activeBtn));

  displayCPU ();
}

export default boardCPU;
