import { objectsArrayCPU, objectsArrayPlayer1 } from ".";

export class Ship
{
  constructor ()
  {
    this.board = null;
    this.data = null;
    this.shipId = null;
    this.length = null;
    this.hover = true;
    this.coords = [ {coord: null, hit: false, shipDiv: null}, 
                    {coord: null, hit: false, shipDiv: null}, 
                    {coord: null, hit: false, shipDiv: null}, 
                    {coord: null, hit: false, shipDiv: null}];
    this.isSunk = false;
  };

  onHit ()
  {
    let sunk = true;
    for (let i = 0; i < this.length; i++)
    {
      if (this.coords[i].hit === false)
        sunk = false;
    }
    if (sunk === true)
    {
      let btn = this.coords[0].shipDiv.parentElement;
      btn.classList.add('shipSunk');
      this.isSunk = true;
      this.onSunk();
    }
  }

  onSunk ()
  {
    let winPlayer1 = true;
    objectsArrayPlayer1.forEach (object => 
    {
      if (object.isSunk === false)
        winPlayer1 = false;
    });

    let winCPU = true;
    objectsArrayCPU.forEach (object => 
    {
      if (object.isSunk === false)
        winCPU = false;
    });

    if (winPlayer1 === true)
    {
      alert('Player 1 Win');
    }
    else if (winCPU === true)
    {
      alert('CPU Win');
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

  isEmpty (id, array, sw)
  {
    let empty = true;
    let forId = 0;

    forId = id;
    for (let i = 0; i < this.length; i++)
    {
      array.forEach (object => 
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
