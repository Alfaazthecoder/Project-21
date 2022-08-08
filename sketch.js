
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world,engine;
var radius = 40;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ball_options={
		restitution:0.3,
		density:1.1
	}

	//Create the Bodies Here.
	ball = Bodies.circle(300,100,22,ball_options);
	World.add(world,ball);

	groundObj= new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  ellipse(ball.position.x,ball.position.y,40)

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:65,y:-65});
  
	}
}

