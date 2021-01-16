const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pressed = false ;

function preload(){
	dustbinImg = loadImage("Images/dustbin_green.png")
}
function setup() {
	
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine); 

	ground = new staticBody(width/2 , height-20 , width , 20);

	paper = new circularBody(205,440.15,30);

	b2 = new staticBody(860,355,15,230);
	
	b3 = new staticBody(1040,355,15,230);

}
function draw(){

	background("cyan");

	textSize(30);
	fill("green");
	textFont("Calibri");
	if(pressed === false){
		text("Press the 'UP' arrow key",500,80);
	}
	var pos = paper.body.position
	if(pos.x > 860 && pos.y > 240){
		text("Good Job !!",550,80);
	}

	fill("yellow");
	ground.display();	
	paper.display();
	dustbin();	
	
	
} 
function keyPressed(){
	if(keyCode === UP_ARROW && pressed === false){ //include "" 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:82,y:105})
		pressed = true;
	}
}
function dustbin(){             
	imageMode(CENTER);
	image(dustbinImg,950,355,200,230);
}