let colorlist = ["gold", "yellow", "turquoise", "red"];

function setup() {
    //this function runs once when the webpage is loaded
    //within this function, you can use p5
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    background(255);

    //intro to for loops
    for (let x = 0; x <= width; x += 200) {
        fill(255, 0, 200);
        ellipse(x, 300, 5, 5);
    }

    //intro to variables
    let x = 5;
    let y = 6;
    let z = x + y;
    console.log(z)

    //intro to conditionals
    let year = 2019;
    if (year == 2015) {
        console.log("you're 6 years off my friend");
    } else if (year == 2016) {
        console.log("you're 5 years off my friend");
    } else if (year == 2017) {
        console.log("you're 4 years off my friend");
    } else if (year >= 2018) {
        console.log('uh close enough');
    } else {
        console.log('idk man');
    }

    //intro to functions
    function testFunction(p1, p2) {
        return p1 * p2;
    }
    
    let a = 5, b = 6;
    let c = testFunction(5, 6)
    console.log(c);
      
}

function draw() {
    //this functions runs many times every second!
    //within this function, you can use p5 syntax
    rect(100, 200, 75, 150)
    ellipse(700, 206, 100, 100)

    // noStroke();
    // fill(random(colorlist));
    // ellipse(mouseX, mouseY, 25, 25);
}


//outside of the setup and draw functions (which are automatically called) - the rest of your code here is plain old javascript