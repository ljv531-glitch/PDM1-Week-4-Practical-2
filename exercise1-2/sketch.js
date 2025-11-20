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

  let x2 = mouseX + 20;
  while(x2 <= width) {
    fill(255);
    stroke(0);
    circle(x2, height / 2, 20);
    x2 += 20;
  }
  
  
}
