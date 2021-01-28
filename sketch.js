
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var leftD,rightD,bottomD;

function preload(){
dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground=new Ground(500,391,1000,20);
	 paper=new Paper(150,100,50,50);
	 leftD=new Dustbin(800,310,20,100);
	 rightD=new Dustbin(950,310,20,100);
	 bottomD=new Dustbin(875,370,170,20);
   
	Engine.run(engine);
  
}



function draw() {
  background("white");
  ground.display();
  paper.display(); 
  leftD.display();
  rightD.display();
  bottomD.display(); 
  image(dustbinImage,782,235,190,150);
   fill ("maroon");
   textSize(100);
  text ("Crumpled Ball",150,90);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


