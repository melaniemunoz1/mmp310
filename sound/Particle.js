class Particle {
    constructor(position) {
        this.position = position.copy();
        this.lifespan = 300;
        this.speed = createVector(random(-5, 5), -3, random(-2, 2));
        
        this.acceleration = createVector(0, 0.0);
        this.rotation = createVector(random(PI), random(PI), random(PI));
		this.rotationSpeed = createVector(random(0.01), random(0.01), random(0.01));

		this.color = createVector(random(10), random(10), random(50, 100));
		this.colorSpeed = createVector(0, 1, 1);
        
        random(boings).play();
    }
    update() {
        this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 1;
        
        
        if (this.position.x < -sphereSize/2  || 
            this.position.x > sphereSize/2){
            this.speed.x *= -1;
            this.acceleration.x *= -1
            random(boings).play();
        }
        
        if (this.position.z < -sphereSize/2 || 
            this.position.z > sphereSize/2){
            this.speed.z *= -1;
            this.acceleration.z *= -1
            random(boings).play();
        }
        
        
        
        if (this.position.y < -sphereSize/2  || 
            this.position.y > sphereSize/2) {
            this.speed.y *= -1;
            this.acceleration.y *= -1
            random(boings).play();
        }
        
        
    }
    display() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);

        
        
        shininess(100);
        
        
       //bear
         //head
    sphere(15);
    
    //ear
    push();
    rotateZ(PI * 0.8);
    translate(4, 14, 0);
    sphere(8, 8);
    pop();
    
    //ear
    push()
    translate(10, -9);
    rotateZ(PI * 1.2);
    sphere(8, 8);
    pop();

    //specularMaterial(0, 217, 255);
    
    //left eye
    push();
	translate(-4,-3,15);;
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(4, 0);
	pop();
    
    //specularMaterial(72, 0, 111);
    // right eye
    push();
	translate(5, -2.5, 15);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(2, 0);
	pop();

   
    
    //nose
    ambientMaterial(146, 82, 0);
    push();
    translate(0,5,15);
    sphere(2);
    pop();

    for (let x = -10; x < 10; x += 4) {
			push();
			translate(x, 0, 0);
			box(3, 6);	
			pop();
		}
		pop();


		// end composition
		pop();
	}

	isDead() {
		return this.lifespan < 0;
	}
}