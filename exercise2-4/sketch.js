function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let rows = 8;
  let cols = 8;
  let cellSize = width / cols;

  let y = 0;
  let row = 0;

  while (row < rows) {

    let x = 0;
    let col = 0;

    while (col < cols) {

     
      if ((row + col) % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }

      stroke(0);
      square(x, y, cellSize);

      x += cellSize;
      col++;
    }

    y += cellSize;
    row++;
  }
}
