const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var player;
var brinjal,burger,capsicum,donut,hotdog,onion,pizza,potato2;
function preload(){
backgroundImg=loadImage("images/background.jpg")
}

function setup() {
  createCanvas(1320,600);
  engine=Engine.create()
  world=engine.world
player=new Player(80,500,25);
bg=createSprite(850,250,1350,600)
bg.scale=2.5;
bg.addImage(backgroundImg);
}
function draw() {
  Engine.update(engine)
  background("blue"); 
   bg.velocityX=-5;
   drawSprites();
player.display();
if(keyDown(UP_ARROW)){
  player.move(0,-5)
}
if(keyDown(DOWN_ARROW)){
  player.move(0,5)
}
if(bg.x<400){
bg.x=bg.width/2;
}

}

