import { arrayBoardPlayer1 } from ".";
import { objectsArrayPlayer1 } from ".";
import { Ship } from "./object";

let sw = 0;


function addShip (ship, list, btnNext, btnDiv)
{
  let id = Number(list.lastChild.textContent);
  let forId = 0;

  if (sw === 0)
  {
    if (((id + ((ship.length - 1) * 10)) < 100) && (ship.isEmpty(id, objectsArrayPlayer1, sw) === true))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        arrayBoardPlayer1[forId].style.backgroundColor = 'blue';
        forId += 10;
      }
      list.style.cursor = 'pointer';

      list.onclick = function ()
      {
        forId = id;
        for (let i = 0; i < ship.length; i++)
        {
          ship.coords[i].coord = forId;
          ship.coords[i].shipDiv = btnDiv[i];
          arrayBoardPlayer1[forId].style.backgroundColor = 'blue';
          arrayBoardPlayer1[forId].classList.add('onShip');
          arrayBoardPlayer1[forId].disabled="disabled";
          arrayBoardPlayer1[forId].style.cursor = 'not-allowed';
          forId += 10;
        }
        btnNext.disabled = false;
        btnNext.click();
        btnNext.disabled = true;
        ship.hover = false;
      }
    } 
    else { list.style.cursor = 'not-allowed'; }
  }
  else
  {
    if ((ship.valided(id) === true) && (ship.isEmpty(id, objectsArrayPlayer1, sw) === true))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        arrayBoardPlayer1[forId].style.backgroundColor = 'blue';
        forId ++;
      }
      list.style.cursor = 'pointer';

      list.onclick = function ()
      {
        forId = id;
        for (let i = 0; i < ship.length; i++)
        {
          ship.coords[i].coord = forId;
          ship.coords[i].shipDiv = btnDiv[i];
          arrayBoardPlayer1[forId].style.backgroundColor = 'blue';
          arrayBoardPlayer1[forId].classList.add('onShip');
          arrayBoardPlayer1[forId].disabled="disabled";
          arrayBoardPlayer1[forId].style.cursor = 'not-allowed';
          forId ++;
        }
        ship.hover = false;
        btnNext.disabled = false;
        btnNext.click();
        btnNext.disabled = true;
      }
    }
    else { list.style.cursor = 'not-allowed'; }
  }
}


/* ==================== P L A Y E R ==================== */

function displayPlayer1 (list)
{
  let btnShipBigPlayer = document.getElementById ('btnShipBigPlayer');     // Big Ship Player
  btnShipBigPlayer.addEventListener ('click', function ()
  {
    btnShipBigPlayer.disabled = true;
    
    let bigShip = new Ship();
    objectsArrayPlayer1.push(bigShip);
    bigShip.board = 'Player 1';
    bigShip.data = 'Big';
    bigShip.shipId = 1;
    bigShip.length = 4;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (bigShip.hover === true)
      {
        addShip(bigShip, list, btnShipMedium1Player, this.children);
      }
    }));
  });
  btnShipBigPlayer.click();

  let btnShipMedium1Player = document.getElementById ('btnShipMedium1Player');     // Medium Ship 1 Player
  btnShipMedium1Player.addEventListener ('click', function ()
  {
    let mediumShip1 = new Ship();
    objectsArrayPlayer1.push(mediumShip1);
    mediumShip1.board = 'Player 1';
    mediumShip1.data = 'Medium';
    mediumShip1.shipId = 1;
    mediumShip1.length = 3;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (mediumShip1.hover === true)
      {
        addShip(mediumShip1, list, btnShipMedium2Player, this.children);
      }
    }));
  });

  let btnShipMedium2Player = document.getElementById ('btnShipMedium2Player');     // Medium Ship 2 Player
  btnShipMedium2Player.addEventListener ('click', function ()
  {
    let mediumShip2 = new Ship();
    objectsArrayPlayer1.push(mediumShip2);
    mediumShip2.board = 'Player 1';
    mediumShip2.data = 'Medium';
    mediumShip2.shipId = 2;
    mediumShip2.length = 3;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (mediumShip2.hover === true)
      {
        addShip(mediumShip2, list, btnShipSmall1Player, this.children);
      }
    }));
  });

  let btnShipSmall1Player = document.getElementById ('btnShipSmall1Player');     // Small Ship 1 Player
  btnShipSmall1Player.addEventListener ('click', function ()
  {
    let smallShip1 = new Ship();
    objectsArrayPlayer1.push(smallShip1);
    smallShip1.board = 'Player 1';
    smallShip1.data = 'Small';
    smallShip1.shipId = 1;
    smallShip1.length = 2;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (smallShip1.hover === true)
      {
        addShip(smallShip1, list, btnShipSmall2Player, this.children);
      }
    }));
  });

  let btnShipSmall2Player = document.getElementById ('btnShipSmall2Player');     // Small Ship 2 Player
  btnShipSmall2Player.addEventListener ('click', function ()
  {
    let smallShip2 = new Ship();
    objectsArrayPlayer1.push(smallShip2);
    smallShip2.board = 'Player 1';
    smallShip2.data = 'Small';
    smallShip2.shipId = 2;
    smallShip2.length = 2;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (smallShip2.hover === true)
      {
        addShip(smallShip2, list, btnShipSmall3Player, this.children);
      }
    }));
  });

  let btnShipSmall3Player = document.getElementById ('btnShipSmall3Player');     // Small Ship 3 Player
  btnShipSmall3Player.addEventListener ('click', function ()
  {
    let smallShip3 = new Ship();
    objectsArrayPlayer1.push(smallShip3);
    smallShip3.board = 'Player 1';
    smallShip3.data = 'Small';
    smallShip3.shipId = 3;
    smallShip3.length = 2;

    let btnShipBigCPU = document.getElementById ('btnShipBigCPU');

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (smallShip3.hover === true)
      {
        addShip(smallShip3, list, btnShipBigCPU, this.children);
      }
    }));
  });
}


function boardPlayer1 ()
{
  let list = document.querySelectorAll ('#boardPlayer1 fieldset');

  let btnRotate = document.getElementById ('btnRotate');
  btnRotate.addEventListener ('click', function ()
  {
    //let boardPlayer1 = document.getElementById ('boardPlayer1');
    //boardPlayer1.classList.add ('hide');
    if (sw === 0)
      sw = 1;
    else
      sw = 0;
  });


  let btnList = document.querySelectorAll ('.contentShipBoard button');
  function activeBtn ()
  {
    btnList.forEach ((item) =>
    item.classList.remove('shipActive'));
    this.classList.add('shipActive');
  }
  btnList.forEach ((item) => item.addEventListener ('click', activeBtn));


  function mouseOutShip ()
  {
    list.forEach ((item) =>
    item.style.backgroundColor = 'rgba(238, 238, 238, 0.8)');

    objectsArrayPlayer1.forEach (object => 
    {
      object.coords.forEach (element =>
      {
        if (element.coord !== null)
        {
          arrayBoardPlayer1[element.coord].style.backgroundColor = 'blue';
        }
      });
    });
  }
  list.forEach ((item) => item.addEventListener ('mouseout', mouseOutShip));

  displayPlayer1 (list);

}

export default boardPlayer1;
