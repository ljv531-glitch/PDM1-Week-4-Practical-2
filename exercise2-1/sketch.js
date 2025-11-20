function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let squareSize = 49;   
  let spacing = 1;      

  for (let i = 0; i < 8; i++) {
    let x = i * (squareSize + spacing);
    fill(255,);
    stroke(0);
    square(x, 0, squareSize);
  }
}
