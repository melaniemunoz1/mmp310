var snowflakeImage, snowmanImage;


function preload() {
    snowflakeImage = loadImage("snowflake.png");
    snowmanImage = loadImage("snowman.png");

}
var snowflakes = [];
var numSnowflake = 2;


var snowmen = [];
var numSnowman = 3;

var snowmenMinSpeed = 2;
var snowmenMaxSpeed = 4;
var snowmenSpeedSlider;

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

    var snowmenSpeedLabel = createElement("label", "Make snowmen go faster");
    snowmenSpeedLabel.position(200, 10);

    snowmenSpeedSlider = createSlider(2, 12, snowmenMinSpeed);
    snowmenSpeedSlider.position(200, 20);
    snowmenSpeedSlider.input(updateSnowmenSpeed);
}

function updateSnowmenSpeed() {
    snowmenMinSpeed = snowmenSpeedSlider.value();
    snowmenMaxSpeed = snowmenMinSpeed * 2;
    for (let i = 0; i < numSnowman; i++) {
        snowmen[i].xSpeed = random(snowmenMinSpeed, snowmenMaxSpeed);
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
