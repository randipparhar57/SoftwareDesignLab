// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

function setup() {
    createCanvas(700, 700 );
    noLoop();
  
    noStroke();
    fill(255, 255, 255);
      background(64, 64, 64); //change background to dark gray
}
  
function draw() {
  
    fill(255, 255, 255); //change the circle color to white
    
    let rows = height / 50;
    let cols = width / 50;
    
    let currColor = color('blue');

    let randomColors = [];
    for (i=0; i < cols; i++){
      randomColors.push(color(random(255), random(255), random(255)));
    }

    for (row = 0; row < rows; row++) {
        // fill(color(random(255), random(255), random(255))); //draw each row with a randomly chosen color
      for (col = 0; col < rows; col++) {
        drawThing(col * 50 + 25, row * 50 + 25);
        // fill(color(random(255), random(255), random(255))); //draw each circle with a randomly chosen color
        fill(randomColors[col]);
        }
    }
}

  
let brownianRadius = 25;
  
function drawThing(x, y) {
    let radius = random(0, 50);
    ellipse(x, y, radius, radius);
}