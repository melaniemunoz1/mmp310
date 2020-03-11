var snowflakeImage;


function preload(){
	snowflakeImage=loadImage('snowflake.png');
	snowmanImage=loadImage('snowman.png');
	
}
var snowflakeX= [-50];
var snowflakeY= [100];
var numSnowflake =60;
var snowflakeSpeedX=[];
var snowflakeSpeedY=[];

var numSnowman=3;
var snowman=[];

function setup (){
	createCanvas(windowWidth,windowHeight);
	let x=-50;
	for (let i=0; i<numSnowflake; i++){
		snowflakeX.push(x);
		let snowflake=new Snowflake(x,y,snowflakeImage);
		snowflakes.push(snowflake);

		x+=width/numSnowflake+random (-100,700);
		snowflakeY.push(random(height/3));
		
	}

	
}

function draw(){
	background('lightblue');

	noStroke();
	fill('white');
	rect(0, height*2/3, width,height*2/3);

	for (let i = 0; i < numSnowflake; i++) {
		image(snowflakeImage, snowflakeX[i], snowflakeY[i]);
		snowflakeX[i]+=random(1);
		snowflakeY[i]+=random(3,4);

		
		snowflakeY[i] += 1;

		
		if (snowflakeY[i] > height) {
			
			snowflakeY[i] = -snowflakeImage.height;
		}
	}
}


