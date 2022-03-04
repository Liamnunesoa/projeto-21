const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;


var ball;
var grounda;
var groundi;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 1400);

    var balloptions={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

		

	}
	


	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);


	//Create the Bodies Here.
    ball= Bodies.circle(200,100,10,balloptions);
    World.add(world, ball);

    grounda= new Ground(900,600,20,120);
	groundi= new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)

  background(51);
  groundi.show();
  grounda.show()
  
  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
 
}

function forca(){
	if(keyDown===UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0},{x:0,y:-0.05})
	}
}



