
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine,box,world,ground;

function setup() {
  canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box = Bodies.rectangle(200,200,100,100);
  World.add(world,box);

  console.log(box);

  var ground_options = {
    isStatic : true,
    density  : 0.1
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  

}

function draw() {
  background(220,200,200);
   
  Engine.update(engine);

  rectMode(CENTER);
  rect(box.position.x,box.position.y,100,100);

  rect(ground.position.x,ground.position.y,400,20);
}