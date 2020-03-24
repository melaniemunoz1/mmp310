var snowflakeImage, snowmanImage;


function preload() {
    snowflakeImage = loadImage("snowflake.png");
    snowmanImage = loadImage("snowman.png");

}
var snowflakes = [];
var numSnowflake = 2;


var snowmen = [];
var numSnowman = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();


    for (let i = 0; i < numSnowflake; i++) {
        let x = random(width);
        let y = random(height / 2);
        let snowflake = new Snowflake(x, y, snowflakeImage);
        snowflakes.push(snowflake);
    }

    for (let i = 0; i < numSnowman; i++) {
        let x = random(width);
        let y = random(height / 3, height / 2);
        let snowman = new Snowman(x, y, snowmanImage);
        snowmen.push(snowman);
    }
}

function draw() {
    background('lightblue');

    noStroke();
    fill('blue');
    rect(0, height * 2 / 3, width, height * 2 / 3);

    for (let i = 0; i < numSnowflake; i++) {
        snowflakes[i].draw();
        snowflakes[i].update();
    }
    for (let i = 0; i < numSnowman; i++) {
        snowmen[i].draw();
        snowmen[i].update();
    }
}
