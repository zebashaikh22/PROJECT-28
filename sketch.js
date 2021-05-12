
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var paper,dustbin;
var ground;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic:true
	}

	ground1 = new Ground({ground_options});
	ball1 = new Ball();
	dustbin1 = new Dustbin(700,300,90,150);
	launcher = new Launcher(ball1.body, {x:160, y:130});
  
	Engine.run(engine);
}


function draw() {
  background(220);
  Engine.update(engine);

  //text(mouseX+","+mouseY,200,200)

  ground1.display();
  ball1.display();
  dustbin1.display();
  launcher.display();

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x:mouseX,y:mouseY});
}


function mouseReleased(){
   launcher.fly();
}