/*
Characters sketch 1/27/2020
*/
var cat;
var dog;
var house;
var story="Torn by two pets";

function preload(){
	cat = loadImage('cat.png');
	dog = loadImage('dog.png');
	house=loadImage('house.png');
}

var catX=0;
var dogX=800;
var houseX=500;

var catY=300;
var dogY=300;
var houseY=300;

function setup(){
	createCanvas (windowWidth, windowHeight);

}

function draw(){
	background('pink');

	image(cat,catX,catY);
	image(dog,dogX,dogY);
	image(house,houseX,houseY);

	textSize(40);
	textAlign(CENTER,CENTER);
	text(story,width/4,20,width/2);

}