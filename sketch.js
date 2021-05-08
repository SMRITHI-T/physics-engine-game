const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var player;
var brinjal,burger,capsicum,donut,hotdog,onion,pizza,potato;
var brinjalImg,burgerImg,capsicumImg,donutImg,hotdogImg,onionImg,pizzaImg,potatoImg;
function preload(){
backgroundImg=loadImage("images/background.jpg")
brinjalImg=loadImage("images/brinjal.png")
burgerImg=loadImage("images/burger.png")
capsicumImg=loadImage("images/capsicum.png")
donutImg=loadImage("images/donut.png")
hotdogImg=loadImage("images/hotdog.png")
onionImg=loadImage("images/onion.png")
pizzaImg=loadImage("images/pizza.png")
potatoImg=loadImage("images/potato2.png")


}

function setup() {
  createCanvas(1320,600);
  engine=Engine.create()
  world=engine.world
player=new Player(80,500,25);
bg=createSprite(850,150,1350,600)
bg.scale=3.1;
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
healthy();
}
function healthy(){
  if(frameCount%200===0){
var healthyFood=createSprite(1320,500,10,10);
healthyFood.velocityX=-5;
var img =Math.round(random(1,4))
switch(img){
  case 1:healthyFood.addImage(brinjalImg);
  break;
  case 2:healthyFood.addImage(capsicumImg);
  break;
  case 3:healthyFood.addImage(onionImg);
  break;
  case 4:healthyFood.addImage(potatoImg);
  break;
}
healthyFood.lifetime=270;
  }
}
function junk(){

}

