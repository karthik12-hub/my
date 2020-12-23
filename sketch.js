
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1 = new Ball(150,20,40)
ground1=new Ground(200,350,25,800)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)



  ball1.display();
ground1.display();

  drawSprites();
 
}



