function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
}

function draw() {
  background(255);

  let y = 0;

  while (y <= height) {

   
    stroke(0, 100, 255);
    line(width / 2, height / 2, width, y);

    
    stroke(0);
    line(0, y, width, 0);

    
    stroke(255, 100, 180);
    line(0, y, width, height);

    y += 10;
  }
}
