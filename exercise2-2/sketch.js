let rects = [];
let spacing = 1;

function setup() {
  createCanvas(400, 400);

  let rectWidth = 49;
  for (let i = 0; i < 8; i++) {
    let x = i * (rectWidth + spacing);
    rects.push({
      x: x,
      y: 0,
      w: rectWidth,
      h: height,
      selected: false
    });
  }
}

function draw() {
  background(255);


  for (let r of rects) {
    if (r.selected) {
      fill(0, 0, 255);  
    } else {
      fill(255);       
    }
    stroke(0);
    rect(r.x, r.y, r.w, r.h);
  }
}


function isInside(r, mx, my) {
  return mx >= r.x && mx <= r.x + r.w &&
         my >= r.y && my <= r.y + r.h;
}

function mousePressed() {

  for (let r of rects) {
    if (isInside(r, mouseX, mouseY)) {
      r.selected = true;
    }
  }
}

function mouseReleased() {

  for (let r of rects) {
    r.selected = false;
  }
}

function mouseMoved() {

  for (let r of rects) {
    if (r.selected && !isInside(r, mouseX, mouseY)) {
      r.selected = false;
    }
  }
}
