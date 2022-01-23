var jerry, jerryImg;
var cheese, cheeseGroup, cheeseImg;
var tom, tomGroup, tomImg;
var gameOver, gameOverImg;
var restart, restartImg;
var bg, bgImg;

var gameState = PLAY;
var PLAY = 1;
var END = 0;
var distance = 0;

function preload(){

jerryImg = loadAnimation("jerry1.JPG","jerry2.JPG");
bgImg = loadImage("background IMG.jpg");
restartImg = loadImage("rename icon.JPG");
gameOverImg = loadImage("gameover icon.JPG");
tomImg = loadImage("Tom.PNG");
cheeseImg = loadImage("cheese.JPG");

}

function setup() {
 createCanvas(800,600);

 path=createSprite(1200,300);
 path.addImage("path",bgImg);
 //path.velocityX = -3;
 path.scale = 2.5;

 jerry=createSprite(70,150);
 jerry.addAnimation("jerryRun",jerryImg);
 jerry.scale=0.05;
 jerry.velocityX= 10

 cheese=createSprite(50,100);
 cheese.addImage("cheese",cheeseImg);
 cheese.scale= 0.03;

 tom=createSprite(70,150);
 tom.addImage("tom",tomImg);
 tom.scale=0.07;

 gameOver=createSprite(650,150);
 gameOver.addImage("gameOver",gameOverImg);
 gameOver.scale=0.5;
 gameOver.visible=false;

 cheeseGroup = new Group()
 tomGroup = new Group();

 jerry.setCollider("rectangle",0,0,40,40,50);

 distance=0;
}
  

function draw() {

 background(0);
 drawSprites();
 textSize(20);
 fill("black");
 text("DISTANCE:"+ distance,+900,30);

 if (gameState===PLAY){

distance = distance + Math.round(getFrameRate()/50);
path.velocityX = -(6 + 2*distance/150);

jerry.y=World.mouseY;

edges=createSprite();
jerry.collide(edges);

if(path.x < 600 ){
    path.x = path.width/2;
  }

jerry.velocityX=velocityx+0.5;






 }
}
