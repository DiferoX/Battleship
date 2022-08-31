let board1 = document.querySelector ('#board1');
let board2 = document.querySelector ('#board2');
let array = [];

function createDivs (rows, cols)
{
  board1.style.setProperty ('--grid-rows', rows);
  board1.style.setProperty ('--grid-cols', cols);

  board2.style.setProperty ('--grid-rows', rows);
  board2.style.setProperty ('--grid-cols', cols);

  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < cols; j++)
    {
      let divsBoard1 = document.createElement('div');
      let txtBoard1 = document.createElement('p');
      txtBoard1.textContent = `[${i}][${j}]`;
      array[[i][j]] = divsBoard1;
      board1.appendChild(divsBoard1);
      divsBoard1.appendChild(txtBoard1)
  
      let divsBoard2 = document.createElement('div');
      board2.appendChild(divsBoard2);
    }
  }
  //console.log(array);
}

createDivs(10, 10);


let list = document.querySelectorAll ('#board1 div');

function activeLink ()
{
  array.forEach ((item) =>
  this.classList.add('active'));
  console.log(this.lastChild.textContent);

  //item.classList.remove('active'));
  //this.classList.add('active');
}

list.forEach ((item) =>
  item.addEventListener ('click', activeLink));
