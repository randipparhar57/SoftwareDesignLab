let incrementParam;
let gridSizeParam;
let mountainParam;
let mountainParam2;
let moonSize;
let colorParam;
let colorParam2;
let colorParam3;
let colorBackground;

let yoff = 0.0; 
let yoff2 = 0.0;

function setup() {
  
    createCanvas(700, 700);
    gridSize = width/20;
  
    createP('noise increment for sky');
    incrementParam = createSlider(0, 1, 0.05, 0.01);
  
    createP('grid size (rows and cols) for sky'); 
    gridSizeParam = createSlider(1, 100, gridSize, 2);
  
    createP('select sky color');
    colorParam = createColorPicker('black');

    createP('select background color');
    colorBackground = createColorPicker(220);
  
    createP('select moon diameter');
    moonSize = mountainParam = createSlider(50, 100, 60, 5);
  
    createP('select color of first mountain');
    colorParam2 = createColorPicker('black');
  
    createP('select rigidness of first mountain');
    mountainParam = createSlider(0.01, 0.10, 0.05, 0.01);
  
    createP('select color of second mountain');
    colorParam3 = createColorPicker('white');
  
    createP('select rigidness of second mountain');
    mountainParam2 = createSlider(0.01, 0.10, 0.08, 0.01);
  
}

function draw() {
  
    background(colorBackground.value());
    //stroke(random(255), random(255), random(255));
    noStroke();
  
    let rowWidth = width/gridSizeParam.value();
  
    //we'll make this square so rows and cols are the same
    let rows = width/rowWidth;  
    let cols = rows;

    let yOffset = 0
    for (let y=0; y<rows; y++){
        let xOffset = 0;
            for (let x=0; x<=cols; x++){
                let col = color(colorParam.value());
                let colorAlphaVal = map(noise(xOffset,yOffset), 0, 1, 0, 255);
                col.setAlpha(colorAlphaVal)
                fill(col);
                circle(x*rowWidth, y*rowWidth, rowWidth);
                xOffset += incrementParam.value();
            } 
        yOffset += incrementParam.value();
    }
  
    //Moon
    fill(255);
    circle(600, 75, moonSize.value());
  
    //Mountain One
    fill(colorParam3.value());
    beginShape();
  
    let xoff=yoff; 
  
    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 5) { 
    
        // Calculate a y value according to noise, map to
        let y = map(noise(xoff), 0, 1, 600, 50);
    
        // Set the vertex
        vertex(x, y);
    
        // Increment x dimension for noise
        xoff += mountainParam2.value();
    }
  
    // increment y dimension for noise
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  
    //Mountain Two
    fill(colorParam2.value());
    beginShape();
  
    let xoff2=yoff2; 
  
    // Iterate over horizontal pixels
    for (let x = 0; x <= width; x += 5) { 
    
        // Calculate a y value according to noise, map to
        let y = map(noise(xoff2), 0, 1, 600, 350);
    
        // Set the vertex
        vertex(x, y);
    
        // Increment x dimension for noise
        xoff2 += mountainParam.value();
    }
  
    // increment y dimension for noise
    yoff2 += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  
}