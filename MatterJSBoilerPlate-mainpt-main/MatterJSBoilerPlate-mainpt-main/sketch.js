const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var floating_shelf;
var shelf;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.75,
    frictionAir : 0.001
  }

  var ground_options = {
    isStatic : true
  }

  var shelf_options = {
    restitution : 0.55,
	frictionAir : 0.001
  }


  ball = Bodies.rectangle(200,-200,20,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,1000,20,ground_options);
  World.add(world,ground);
  
  shelf = Bodies.rectangle(200,10,100,20,shelf_options);
  World.add(world,shelf);

  floating_shelf = Bodies.circle(200,-1000,100,shelf_options);
  World.add(world,floating_shelf);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(floating_shelf.position.x,floating_shelf.position.y,100);

 rect(ball.position.x,ball.position.y,20,20);
 rect(shelf.position.x,shelf.position.y,100,20);
 rect(ground.position.x,ground.position.y,1000,20);
  
}



