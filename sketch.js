
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(80,380,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(300,380,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
 bananaGroup=createGroup();
 obstacleGroup=createGroup(); 

  
  textSize(20);
  stroke("red");
  fill("white");
}


function draw() {

  background(0);
    
  
  
  if(keyDown("space")&& monkey.y >= 344){
    monkey.velocityY = -12;     
  }
     monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground); 
  
  
  if(ground.x < 0){
    ground.x = ground.width/2;}
  
  food();
  obstacle();
  
  survivalTime=survivalTime+Math.round(frameRate()/60);
  text("Survival Time:"+ survivalTime,40,80);
    

 drawSprites();

}

function food() {
  if(frameCount%80===0){
  var banana=createSprite(400,200,40,40);
  banana.y=Math.round(random(260,300));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  bananaGroup.add(banana);    
  }
}
  
function obstacle() {
  if(frameCount%300===0){
  var obstacle=createSprite(600,356,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-5;
  obstacleGroup.add(obstacle);  
  }
}



