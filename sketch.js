//NAMESPACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground , ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //creates a variable engine that we can manipulate/change
  world = engine.world;

  var ground_options = {isStatic: true};
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);

  var ball_options = {restitution: 2 }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ball);
}

function draw() {
  background(0);  
  //Let our engine update according to Matter.Engine
  Engine.update(engine);

  rectMode(CENTER); //instructs the compiler to take the x & y as the centre of the shape
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y , 20 ,20)
}

/*
PHYSICS ENGINE
 - libraries that follow the laws of physics
 - Matter.js

  3 parts:

    1. Engine - UNIVERSE - follows all the laws of physics
        MATTER.ENGINE
    2. World - manipulates the laws of physics according to what it wants
        MATTER.WORLD
    3. Bodies - objects
        MATTER.BODIES


        Giving nicknames - NAMESPACING
    */