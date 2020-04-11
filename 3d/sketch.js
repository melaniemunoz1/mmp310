var rotX,rotY,rotZ;


function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL);
    
    rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotX.position(10, 20);

	rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotY.position(10, 40);

	rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotZ.position(10, 60);
}


function draw() {
    background(144, 0, 255);

    noStroke();
    ambientLight(61, 25, 180);
    directionalLight(450, 400, 200, 1, 1, -10);
    pointLight(105, 155, 255, mouseX - width / 3, mouseY - height / 2, 300);
    ambientMaterial(241, 162, 62 );
    
    
    rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

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