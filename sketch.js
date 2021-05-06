const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var player;
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
player=new Player(50,200,40);
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
player.display();
}
function keyPressed(){
  console.log("keyPressed")
  console.log(player.body.y)
  if(keyCode===UP_ARROW){
    player.move(0,-5)
  }
}
