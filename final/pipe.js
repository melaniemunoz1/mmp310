function Pipe(){
    this.spacing = 175;
  this.top = random(height / 6, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 80;
  this.speed = 6;
    //this.spacing=7;
    //this.top = random(height/6, 3/4 * height);
    //this.bottom=height-(this.top+this.spacing);
    //this.x = width;
    //this.w=80;
    //this.speed=4;
    
    this.highlight = false;
    
    
    this.hits= function(ball){
        if (ball.y < this.top || ball.y > height - this.bottom){
            if (ball.x > this.x && ball.x < this.x + this.w){
                this.highlight=true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
    
    
    this.show = function(){
        fill(253, 250, 76);
        if (this.highlight){
            fill(0, 255, 0);
        }
        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);
    }
    this.update = function(){
        this.x -=this.speed;
    }
    this.offscreen = function(){
        if (this.x < -this.w){
            return true;
        } else{
            return false;
        }
    }
}