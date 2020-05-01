var music;

function preload(){
    music=loadSound('Yung_Kartz_-_09_-_Glide.mp3');
}
    

let particleSystem;
var sphereSize = 250;



function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	particleSystem = new System(createVector(0, 0, 0));
}

function keyPressed(){
    if (keyCode==32){
        if(music.isPlaying()){
            music.pause();
        } else{
             music.play();
        }
       
        }
    if (keyCode == 13){
        particleSystem.add();
    }
}




function draw() {
	background(144, 0, 255);

	orbitControl();
    
    push();
    stroke('lightblue');
    noFill();
    sphere(sphereSize);
    pop();

	directionalLight(450, 400, 200, 1, 1, -10);
    pointLight(105, 155, 255, mouseX - width / 3, mouseY - height / 2, 300);
    ambientMaterial(241, 162, 62 );

	
	particleSystem.update();

}