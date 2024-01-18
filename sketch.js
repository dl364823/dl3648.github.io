// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    angleMode(DEGREES);
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
   
// Hour
  let hrColor = map(hr, 0, 23, 0, 255);
  fill(hrColor, 100, 100);
  ellipse(width / 2, height / 2, 200, 200);
    
// Min 
  push();
  translate(width / 2, height / 2);
  rotate(map(min, 0, 60, 0, 360));
  stroke(0, 0, 0);
  line(0, 0, 100, 0);
  pop();
    
// Sec
  let secSize = map(sec, 0, 59, 10, 30);
  fill(100, 100, 255);
  ellipse(width / 2, height / 2, secSize, secSize);
    
// Log Min Change
  if (frameCount % 60 == 0) {
        console.log(min);
    }
}
