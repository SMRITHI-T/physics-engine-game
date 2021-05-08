const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var player;
var brinjal,burger,capsicum,donut,hotdog,onion,pizza,potato;
var brinjalImg,burgerImg,capsicumImg,donutImg,hotdogImg,onionImg,pizzaImg,potatoImg;
var healthyGroup,junkGroup;
var health=0;
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
heartImg=loadImage("images/heart.png")


}

function setup() {
  createCanvas(1320,600);
  engine=Engine.create()
  world=engine.world
player=new Player(80,500,25);
var heart1=createSprite(800,60,20,20);
var heart2=createSprite(820,60,20,20);
var heart3=createSprite(840,60,20,20);
var heart4=createSprite(860,60,20,20);
var heart5=createSprite(880,60,20,20);
var heart6=createSprite(900,60,20,20);
var heart7=createSprite(920,60,20,20);
var heart8=createSprite(940,60,20,20);
var heart9=createSprite(960,60,20,20);
var heart10=createSprite(980,60,20,20);
var heart11=createSprite(1000,60,20,20);
var heart12=createSprite(1020,60,20,20);
var heart13=createSprite(1040,60,20,20);
var heart14=createSprite(1060,60,20,20);
var heart15=createSprite(1080,60,20,20);
heart1.visble=true;
heart2.visble=true;
heart3.visble=true;
heart4.visble=false;
heart6.visble=false;
heart7.visble=false;
heart8.visble=false;
heart9.visble=false;
heart10.visble=false;
heart11.visble=false;
heart12.visble=false;
heart13.visble=false;
heart14.visble=false;
heart15.visble=false;

bg=createSprite(850,150,1350,600)
bg.scale=3.1;
bg.addImage(backgroundImg);
healthyGroup=new Group();
junkGroup=new Group();
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
text("LIVES: ", 790,60)
text("goal=15",1200,50);
if(player.isTouching(healthyGroup)){
heart4.visible=true;
}
if(player.isTouching(junkGroup)){
  heart4.visible=true;
  }
healthy();
junk ();
}
function healthy(){
  if(frameCount%200===0){
var healthyFood=createSprite(1320,500,10,10);
healthyFood.velocityX=-5;
healthyFood.scale=0.15;
healthyFood.y=Math.round(random(50,550))
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
healthyFood.setLifetime=270;
healthyGroup.add(healthyFood);
  }
}
function junk(){
  if(frameCount%150===0){
    var junkFood=createSprite(1320,500,10,10);
    junkFood.velocityX=-5;
    junkFood.scale=0.1;
    junkFood.y=Math.round(random(50,550))
    var img =Math.round(random(1,4))
    switch(img){
      case 1:junkFood.addImage(donutImg);
      break;
      case 2:junkFood.addImage(hotdogImg);
      break;
      case 3:junkFood.addImage(pizzaImg);
      break;
      case 4:junkFood.addImage(burgerImg);
      break;
    }
    junkFood.setLifetime=270;
    junkGroup.add(junkFood);
      }
}

