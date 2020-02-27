var snowflakeImage;

function preload(){
	snowflakeImage=loadImage('snowflake.png')
}
function setup (){
	createCanvas(windowWidth,windowHeight);
	setting();
}

function mousePressed(){
	setting();
}
function setting(){
	background('lightblue');

for (let x=55; x <= width; x+=500){
	image(snowflakeImage,x,5-x/10);
	
}
for (let x=100;x <= width; x+=200){
	let y = height;
	let offset=random(-1000,0);
	image(snowflakeImage,x, y+offset);
}
}
