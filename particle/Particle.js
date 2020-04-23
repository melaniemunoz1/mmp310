class Particle {
    constructor(position) {
        this.position = position.copy;
        this.lifespan = 300;
        this.speed = createVector(random(-0.5, 0.5), random(-1), 0);

        this.acceleration = createVector(0, 0.1, 0);
        this.rotation = createVector(random(PI), random(PI), random(PI));
        this.rotationSpeed=createVector(random(0.01), random(0.01), random(0.01));
        
        this.color = createVector(0, 217, 255);
        this.colorSpeed = createVector(3, 1, 1);
    }
    update() {
        this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 1;
    }
    display() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotateX(this.rotation.x);
        rotateY(this.rotation.y);
        rotateZ(this.rotation.z);

        
        specularMaterial(this.color.x, this.color.y, this.color.z, 200);
        shininess(20);
        
        
       //bear
         //head
    sphere(150);
    
    //ear
    push();
    rotateZ(PI * 0.8);
    translate(40, 140, 0);
    sphere(80, 80);
    pop();
    
    //ear
    push()
    translate(100, -90);
    rotateZ(PI * 1.2);
    sphere(80, 80);
    pop();

    specularMaterial(0, 217, 255);
    
    //left eye
    push();
	translate(-40,-30,150);;
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(40, 10);
	pop();
    
    specularMaterial(72, 0, 111);
    // right eye
    push();
	translate(50, -25, 150);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(20, 10);
	pop();
    
    // right eyeball
	ambientMaterial(0, 217, 255);
	push();
    translate(50, -25, 150);
	sphere(20);
    pop();
    
    //left eyeball
    specularMaterial(186, 69, 255);
    push();
	translate(-40,-30,150);
	sphere(40);
	pop();
    
    //nose
    ambientMaterial(146, 82, 0);
    push();
    translate(0,50,150);
    sphere(20);
    pop();

        

    }
    isDead() {
        return this.lifespan < 0;
    }
}
