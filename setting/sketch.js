/*
Characters sketch 1/27/2020
*/
var cat;
var dog;
var house;




function preload(){
	cat = loadImage('cat.png');
	dog = loadImage('dog.png');
	house=loadImage('house.png');
}

var catX=0;
var dogX=800;

		

var catY=550;
var dogY=550;

var story="Torn by two pets";

//outside,bedroom,bathroom
var currentSetting = "outside" ;


function setup(){
	createCanvas (windowWidth, windowHeight);

}

function draw(){

	if ( currentSetting == "outside" ) {
		background('pink');

		fill('green');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		image(house,500,400);
		

	} else if (currentSetting == "bedroom"){
		background('pink');
		fill('yellow');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);


	}
	
	
	image(cat,catX,catY);
	image(dog,dogX,dogY);
	

	fill('black');
	textSize(40);
	textAlign(CENTER,CENTER);
	text(story,width/4,20,width/2);

	textSize(18);
	fill('white;')
	text("Click to go to the next scene", width-100, height-70,100);

	function mousePressed(){
		//change scene
		if (currentSetting== "outside"){
			currentSetting="bedroom";

			story="GET OFF THE BED MR BARKER";


		} else if (currentSetting=="bedroom"){
			currentSetting=="bathroom";
		}
	}
		function keyPressed(){
			if (keyCode==39){
				if (currentSetting=="outside"){
					currentSetting="bedroom";
					story="NOW MR WHISKERS GET DOWN";


				}
			}
		}
}



