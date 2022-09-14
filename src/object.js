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
