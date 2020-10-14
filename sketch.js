const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var stage=0;
var ballIMG,brickIMG;
var paddle,paddleIMG;
 
var form;
var canvas;
var ball;
var nextStage;

function setup(){
    engine = Engine.create();
    world = engine.world;
canvas=createCanvas(displayWidth-30,displayHeight-30)
form= new Form();

///nextStage=NextPage();

}
function preload(){
	ballIMG=loadImage("ball.png")
    brickIMG=loadImage("brick.png")
    paddleIMG=loadImage("paddle.png")
}





function draw(){
    
background("pink")
form.display();
//nextStage.display()
if(stage===0){
    form.display();
}else if(stage===2){
 //   nextStage.display();

    ball=createSprite(700,300,40,40);
   
      ball.addImage(ballIMG);
      ball.scale=0.16;
      paddle=createSprite(500,500,20,20);
      paddle.addImage(paddleIMG);
      paddle.scale=0.2;

}



drawSprites();
}





