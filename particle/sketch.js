let particleSystem;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	particleSystem = new System(createVector(0, 0, 0));
}

function draw() {
	background(20);

	orbitControl();

	directionalLight(450, 400, 200, 1, 1, -10);
    pointLight(105, 155, 255, mouseX - width / 3, mouseY - height / 2, 300);

	particleSystem.add();
	particleSystem.update();

}