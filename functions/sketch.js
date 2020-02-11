
var cat;
var dog;
var house;
var bathroom;
var bed;




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



var story="Mr.Paws and Mr.Whiskers always have adventures";
var currentSetting = "outside" ;



function setup(){
	createCanvas (windowWidth, windowHeight);

}

function draw(){

	if ( currentSetting == "outside" ) {
		outside();

	} else if (currentSetting == "bathroomScene"){
		bathroomScene();


	} else if(currentSetting == "bedroom"){
		bedroom();

	} else if (currentSetting=="ending"){
		outside();
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
}

function outside(){
	background('pink');
	fill('green');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
	image(house,500,400);
		
}

function bathroomScene(){
	background('pink');
	fill('yellow');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
	image(bathroom,500,200);	
}

function bedroom(){
	background('darkblue');
	fill('grey');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
	image(bed,100,150);	
		
}






function mousePressed(){
	//change scene
	if (currentSetting== "outside"){
		currentSetting="bathroomScene";
		story="Do you mind,I need privacy...";
		catX=800;
		catY=100;
		dogX=200;
		dogY=100;

	} else if (currentSetting=="bathroomScene"){
		currentSetting="bedroom";
		story="THIS IS MY BED!";
		catX=300;
		catY=100;
		dogX=300;
		dogY=600;
	} else if (currentSetting=="bedroom"){
		currentSetting="ending";
		story="Then end."
	} else if(currentSetting=="ending"){
		currentSetting="outside";
		story="Mr.Paws and Mr.Whiskers always have adventures";
		 catX=0;
		 dogX=800;

		 catY=550;
		 dogY=550;
	}
}






