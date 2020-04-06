bgColor=61;
var hueSlider;

function setup(){
    createCanvas(windowWidth,windowHeight);
    noStroke();
    pattern();
    
    var button=createButton("Create");
    button.position(10,10);
    button.mousePressed(pattern);
    
    var saveButton=createButton("Save Image");
    saveButton.position(100,10);
    saveButton.mousePressed(saveImage);
    
    var hueLabel=createElement("label", "Swipe and Hit Create!");
    hueLabel.position(400,10);
    hueSlider=createSlider(5,bgColor,bgColor);
    hueSlider.position(400,30);
    hueSlider.input(updateHue);
    
}
function updateHue(){
    bgColor=hueSlider.value();
}
function saveImage(){
    save("pattern.png");
}

function pattern(){
    //52, 97%, 52%
    colorMode(HSB,360,100,100);
    background(bgColor,97,52);
    for(let i=0; i < 100; i++){
        let x=i*100+random(50);
        let y=random(height);
        let s=random(100,200);
        
        fill('red');
        circle(x,y,s);
    }
}
