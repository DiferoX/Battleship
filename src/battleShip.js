import { divsArray } from ".";
import { objectsArray } from ".";

let sw = 0;
let hover = true;

export class Ship
{
  constructor ()
  {
    this.data = null;
    this.shipId = null;
    this.length = null;
    this.coords = [{coord: null, hit: false}, {coord: null, hit: false}, {coord: null, hit: false}, {coord: null, hit: false}];
  };

  onHit ()
  {
    if (this.data === null)
    {
      console.log ('Ok');
    }
    else
    {
      console.log ('X');
    }
  }

  valided (id)
  {
    let i = this.length - 1;
    if (((id < 10) && ((id + i) < 10)) || 
    (((id >= 10) && (id < 20)) && ((id + i) < 20)) || 
    (((id >= 20) && (id < 30)) && ((id + i) < 30)) || 
    (((id >= 30) && (id < 40)) && ((id + i) < 40)) || 
    (((id >= 40) && (id < 50)) && ((id + i) < 50)) || 
    (((id >= 50) && (id < 60)) && ((id + i) < 60)) || 
    (((id >= 60) && (id < 70)) && ((id + i) < 70)) || 
    (((id >= 70) && (id < 80)) && ((id + i) < 80)) || 
    (((id >= 80) && (id < 90)) && ((id + i) < 90)) || 
    (((id >= 90) && (id < 100)) && ((id + i) < 100)))
    {
      return true;
    }
    else
      return false;
  }

  isEmpty (id)
  {
    let empty = true;
    let forId = 0;

    forId = id;
    for (let i = 0; i < this.length; i++)
    {
      objectsArray.forEach (object => 
      {
        object.coords.forEach (element =>
        {
          if (element.coord === forId)
            empty = false;
        });
      });
      if (sw === 0)
        forId += 10;
      else
        forId ++;
    }
    return empty;
  }
};


function addShip (ship, list, btnNext)
{
  let id = Number(list.lastChild.textContent);
  let forId = 0;

  if (sw === 0)
  {
    if (((id + ((ship.length - 1) * 10)) < 100) && (ship.isEmpty(id) === true))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        divsArray[forId].style.backgroundColor = 'blue';
        forId += 10;
      }
      list.style.cursor = 'pointer';

      list.onclick = function ()
      {
        forId = id;
        for (let i = 0; i < ship.length; i++)
        {
          ship.coords[i].coord = forId;
          forId += 10;
        }
        btnNext.disabled = false;
        btnNext.click();
        btnNext.disabled = true;
        hover = false;
      }
    } 
    else { list.style.cursor = 'not-allowed'; }
  }
  else
  {
    if ((ship.valided(id) === true) && (ship.isEmpty(id) === true))
    {
      forId = id;
      for (let i = 0; i < ship.length; i++)
      {
        divsArray[forId].style.backgroundColor = 'blue';
        forId ++;
      }
      list.style.cursor = 'pointer';

      list.onclick = function ()
      {
        forId = id;
        for (let i = 0; i < ship.length; i++)
        {
          ship.coords[i].coord = forId;
          forId ++;
        }
        btnNext.disabled = false;
        btnNext.click();
        btnNext.disabled = true;
        hover = false;
      }
    }
    else { list.style.cursor = 'not-allowed'; }
  }
  console.log (objectsArray);
}


function battleShip ()
{
  let list = document.querySelectorAll ('#board1 div');

  let btnRotate = document.getElementById ('btnRotate');
  btnRotate.addEventListener ('click', function ()
  {
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

    objectsArray.forEach (object => 
    {
      object.coords.forEach (element =>
      {
        if (element.coord !== null)
        {
          divsArray[element.coord].style.backgroundColor = 'blue';
          divsArray[element.coord].classList.add('onShip');
        }
      });
    });
  }
  list.forEach ((item) => item.addEventListener ('mouseout', mouseOutShip));


  let btnShipBigPlayer = document.getElementById ('btnShipBigPlayer');     // Big Ship Player
  btnShipBigPlayer.addEventListener ('click', function ()
  {
    hover = true;
    btnShipBigPlayer.disabled = true;
    
    let bigShip = new Ship();
    objectsArray.push(bigShip);
    bigShip.data = 'Big';
    bigShip.shipId = 1;
    bigShip.length = 4;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (hover === true)
      {
        addShip(bigShip, list, btnShipMedium1Player);
      }


      /*
      if (hover === true)
      {
        let id = Number(list.lastChild.textContent);
      
        if (sw === 0)
        {
          if ((id + 30) < 100)
          {
            list.style.cursor = 'pointer';
            divsArray[id].style.backgroundColor = 'blue';
            divsArray[id + 10].style.backgroundColor = 'blue';
            divsArray[id + 20].style.backgroundColor = 'blue';
            divsArray[id + 30].style.backgroundColor = 'blue';
            list.onclick = function ()
            {
              bigShip.coords[0].coord = id;
              bigShip.coords[1].coord = (id + 10);
              bigShip.coords[2].coord = (id + 20);
              bigShip.coords[3].coord = (id + 30);
              btnShipBigPlayer.disabled = true;
              btnShipMedium1Player.disabled = false;
              btnShipMedium1Player.click();
              btnShipMedium1Player.disabled = true;
              hover = false;
            }
          }
          else
          {
            list.style.cursor = 'not-allowed';
          }
        }
        else
        {
          if (((id < 10) && ((id + 3) < 10)) || 
            (((id >= 10) && (id < 20)) && ((id + 3) < 20)) || 
            (((id >= 20) && (id < 30)) && ((id + 3) < 30)) || 
            (((id >= 30) && (id < 40)) && ((id + 3) < 40)) || 
            (((id >= 40) && (id < 50)) && ((id + 3) < 50)) || 
            (((id >= 50) && (id < 60)) && ((id + 3) < 60)) || 
            (((id >= 60) && (id < 70)) && ((id + 3) < 70)) || 
            (((id >= 70) && (id < 80)) && ((id + 3) < 80)) || 
            (((id >= 80) && (id < 90)) && ((id + 3) < 90)) || 
            (((id >= 90) && (id < 100)) && ((id + 3) < 100)))
          {
            list.style.cursor = 'pointer';
            divsArray[id].style.backgroundColor = 'blue';
            divsArray[id + 1].style.backgroundColor = 'blue';
            divsArray[id + 2].style.backgroundColor = 'blue';
            divsArray[id + 3].style.backgroundColor = 'blue';
            list.onclick = function ()
            {
              bigShip.coords[0].coord = id;
              bigShip.coords[1].coord = (id + 1);
              bigShip.coords[2].coord = (id + 2);
              bigShip.coords[3].coord = (id + 3);
              btnShipBigPlayer.disabled = true;
              btnShipMedium1Player.disabled = false;
              btnShipMedium1Player.click();
              btnShipMedium1Player.disabled = true;
              hover = false;
            }
          }
          else
          {
            list.style.cursor = 'not-allowed';
            //item.setAttribute ('aria-disabled', 'true');
          }
        }
      }
      */
    }));
  });

  let btnShipMedium1Player = document.getElementById ('btnShipMedium1Player');     // Medium Ship 1 Player
  btnShipMedium1Player.addEventListener ('click', function ()
  {
    let hover = true;
    let mediumShip1 = new Ship();
    objectsArray.push(mediumShip1);

    mediumShip1.data = 'Medium 1';
    mediumShip1.length = 3;

    list.forEach(list => list.addEventListener ('mouseover', () => 
    {
      if (hover === true)
      {
        let id = Number(list.lastChild.textContent);
      
        if (sw === 0)
        {
          if (((id + 20) < 100) && (mediumShip1.isEmpty(id) === true))
          {
            list.style.cursor = 'pointer';
            divsArray[id].style.backgroundColor = 'blue';
            divsArray[id + 10].style.backgroundColor = 'blue';
            divsArray[id + 20].style.backgroundColor = 'blue';
            list.onclick = function ()
            {
              mediumShip1.coords[0].coord = id;
              mediumShip1.coords[1].coord = (id + 10);
              mediumShip1.coords[2].coord = (id + 20);
              hover = false;
            }
          }
          else
          {
            list.style.cursor = 'not-allowed';
          }
        }
        else
        {
          if (((id < 10) && ((id + 2) < 10)) || 
            (((id >= 10) && (id < 20)) && ((id + 2) < 20)) || 
            (((id >= 20) && (id < 30)) && ((id + 2) < 30)) || 
            (((id >= 30) && (id < 40)) && ((id + 2) < 40)) || 
            (((id >= 40) && (id < 50)) && ((id + 2) < 50)) || 
            (((id >= 50) && (id < 60)) && ((id + 2) < 60)) || 
            (((id >= 60) && (id < 70)) && ((id + 2) < 70)) || 
            (((id >= 70) && (id < 80)) && ((id + 2) < 80)) || 
            (((id >= 80) && (id < 90)) && ((id + 2) < 90)) || 
            (((id >= 90) && (id < 100)) && ((id + 2) < 100)))
          {
            list.style.cursor = 'pointer';
            divsArray[id].style.backgroundColor = 'blue';
            divsArray[id + 1].style.backgroundColor = 'blue';
            divsArray[id + 2].style.backgroundColor = 'blue';
            list.onclick = function ()
            {
              mediumShip1.coords[0].coord = id;
              mediumShip1.coords[1].coord = (id + 1);
              mediumShip1.coords[2].coord = (id + 2);
              hover = false;
            }
          }
          else
          {
            list.style.cursor = 'not-allowed';
            //item.setAttribute ('aria-disabled', 'true');
          }
        }
      }
    }));
  });
}

export default battleShip;
