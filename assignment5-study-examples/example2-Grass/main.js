// This example draws a row of lines. The height and lean of each line is chosent at random to create a natural, grass-like appearance.

console.log("hello, grass");

function setup() {
  console.log("setup, grass");
  createCanvas(windowWidth, windowHeight);

  noStroke();
  fill(255, 255, 255);

  noLoop();
}

function draw() {
    console.log("draw, grass");
    background(40, 40, 40);
  
    fill(220, 220, 220);
    // fill(53, 94, 59); // NOTE: change the "ground" to green.
    rect(0, height * 0.5, width, height * 0.5);
  
    // stroke(53, 94, 59); // NOTE: change the blades to green. Could also change the ground to green by changing the fill color.
  
    //stroke(144, 238, 144); // lighter shade of green
    drawGrass(0, height * 0.5 - 350, width, 350); // NOTE: change from 100 to 350 to make taller
    
    //stroke(0, 128, 0); // medium shade of green
    drawGrass(0, height * 0.5 - 200, width, 200); // NOTE: change from 100 to 200 to make taller
    
    //stroke(2, 48, 32); // darker shade of green
    drawGrass(0, height * 0.5 - 100, width, 100);
}

function drawGrass(left, top, width, height) {
  // loop from the left to the right, one pixel per step
  for (let x = left; x < left + width; x++) {
    // x and y are the base of the blade of grass
    const y = top + height;

    // height of the grass
    // pick lowest of three "rolls" to bias strongly towards short blades
    // with occasional long ones
    const bladeHeight = max( // NOTE: changing it from min to max picks the highest of the three rolls to bias strongly towards taller blades with occasional short ones.
      random(0, height),
      random(0, height),
      random(0, height)
    );

    // horizontal offset of top of blade relative to base
    // average two "rolls" to bias towards middle
    let bladeLean = (random(-1, 1) + random(-1, 1)) * 0.5;

    // scale lean by height so that shorter blades aren't more leany
    bladeLean = bladeLean * bladeHeight;

    // scaling factor to to taste
    bladeLean = bladeLean * 0.2;

    // draw the grass
    // stroke(random(0), random(128), random(0)); // comment out stroke in function draw(), write it in the for loop in function drawGrass and utilize random on rgb for green which is (0,128,0). Will generate random shades of green for each blade of grass.
    line(x, y, x + bladeLean, y - bladeHeight);

    if (height <= 350 && height>200) {
        stroke(144, random(238), 144); // random lighter shade of green
    }

    else if (height <= 200 && height>100) {
        stroke(0, random(128), 0); // random medium shade of green
    }

    else {
        stroke(2, random(48), 32); // random darker shade of green
    }
  }
}
