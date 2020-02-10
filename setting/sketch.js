/*
Characters sketch 1/27/2020
*/
var cat;
var dog;
var house;
var fight;
var bathroom;
var bed;
var sleep;



function preload(){
	cat = loadImage('cat.png');
	dog = loadImage('dog.png');
	house=loadImage('house.png');
	bathroom=loadImage('bathroom.png');
	bed=loadImage('bed.png')
}

var catX=0;
var dogX=800;

		

var catY=550;
var dogY=550;



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
		var story="Mr.Paws and Mr.Whiskers always have adventures";
		

	} else if (currentSetting == "bathroom"){
		background('pink');
		fill('yellow');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
		image(bathroom,500,200);
		dogX=400;
		dogY=100;
		catX=800;
		catY=100;
		var fight="Do you mind,I need privacy...";


	} else if(currentSetting=="bedroom"){
		background('darkblue');
		fill('grey');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
		image(bed,100,150);
		catX=300;
		catY=100;
		dogX=700
		dogY=100
		var sleep="THIS IS MY BED!";

	}
	
	
	image(cat,catX,catY);
	image(dog,dogX,dogY);
	

	fill('black');
	textSize(40);
	textAlign(CENTER,CENTER);
	text(story,width/4,20,width/2);
	text(fight,width/4,20,width/3);
	text(sleep,width/4,20,width/4);

	textSize(18);
	fill('white;')
	text("Click to go to the next scene", width-100, height-70,100);
}

	function mousePressed(){
		//change scene
		if (currentSetting== "outside"){
			currentSetting="bathroom";

			


		} else if (currentSetting=="bathroom"){
			currentSetting=="bedroom";
		} else if (currentSetting="bedroom"){
			currentSetting="outside";
		}
	}
		function keyPressed(){
			if (keyCode==39){
				if (currentSetting=="outside"){
					currentSetting="bathroom";
					} else if (currentSetting=="bathroom"){
						currentSetting="bedroom";
					} else if (currentSetting=="bedroom"){
						currentSetting="outside";
					}


				}
			}
		




