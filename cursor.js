let x = 1;
let y = 1;
let easing = 0.1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
}

function draw() {
  background(65, 105, 225);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 5, 5);
}
