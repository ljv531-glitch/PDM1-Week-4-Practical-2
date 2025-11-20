function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let x = 0;

  
  while (x <= mouseX) {
    fill(0, 0, 255);
    noStroke();
    circle(x, height / 2, 20);
    x += 20; 
  }
}
