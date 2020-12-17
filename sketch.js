
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime = 0;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
}


function draw() {
  background("white");
  
  textSize = 20;
text ("survival score: " + survivalTime,300,50);
  
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
   if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -12;
   }
monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  if(ground.x<400){
     ground.x=350
     }
  if(frameCount % 100 === 0){
    obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1
  obstacle.velocityX = -5;
   
  }
  if(frameCount % 130 === 0){
 banana = createSprite(400,250,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1
  banana.velocityX = -5;
  banana.lifetime = 100
}
   score = score + Math.round(getFrameRate()/60);
    
  drawSprites();
}

