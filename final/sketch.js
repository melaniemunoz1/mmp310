var bounce;
var bird;
var pipes = [];

function preload(){
    beach=loadImage("bg.jpg");
    bounce=(loadSound('bounce.wav'));
}


function setup (){
    createCanvas(700,500);
    ball = new Ball();
    pipes.push(new Pipe());
}
function draw(){
    background(beach);
    
    for (var i = pipes.length - 1; i >= 0; i--){
        pipes [i].show();
        pipes[i].update();
        
        if (pipes[i].hits(ball)){
            
        }
        
        
        if (pipes[i].offscreen()){
            pipes.splice(i,1);
        }
            
    }
    
    
    ball.update();
    ball.show();
    
    if(frameCount % 100 == 0){
       pipes.push(new Pipe()); 
    }
    
     
}
 function keyPressed() {
  if (keyCode==32) {
    ball.up();
  } if (bounce.isPlaying()){
      bounce.pause();
  } else{
      bounce.play();
  }
 }
