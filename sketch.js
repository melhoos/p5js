let sketch = function(p) { 

    p.setup = function() {
        p.createCanvas(720, 800);
        p.background(235);
        p.colorMode(p.HSB);
        p.noStroke();
        p.noLoop();
    }
    
    p.draw = function() {
        let size = 300;
        let numberOfRows =  Math.ceil(p.height / (size/2) ) +1 ;
        let numberOfCirclesEachRow = Math.ceil(p.width/ size); 
        let yCoor = 0; 
        let xCoor = 0;
        for (var i = 0; i < numberOfRows; i++) {
            xCoor = (i%2 == 0 ? 0 : (size/2))
            for (var j = 0; j < numberOfCirclesEachRow; j++) {
                let numberOfRings = randomIntFromInterval(5,10)
                drawTarget(xCoor, yCoor, size, numberOfRings)
                xCoor += size;
            }
            yCoor += size/2;
        }
    }

    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    
    function drawTarget (xloc, yloc, size, num) {
        const steps = size / num;
        const randomColor = p.random(360)
        const grayvalues = randomColor / num;
        for (let i = 0; i < num; i++) {
            //p.fill(color, Saturation, Brightness, Transparency)
            p.fill(randomColor, 70, ( (grayvalues * i) + 30 ) , 1);
            p.ellipse(xloc, yloc, size - i * steps, size - i * steps);
        }
    }
}

new p5(sketch);