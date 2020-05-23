var bullet,bullet2,wall,wall2;
var speed,weight,thckness;

function setup() {
 createCanvas(800,400);
 speed=random(223,321);
 weight=random(30,52);
 thickness = random(22,83);
 bullet = createSprite(50, 140, 80, 20);
 wall = createSprite(700, 140, thickness, 80);
 bullet2 = createSprite(50, 280, 80, 20);
 wall2 = createSprite(700, 280, thickness, 80);
 bullet.velocityX = speed;
 bullet2.velocityX = speed;
 }

function draw() {
  background(255,255,255);

  
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   if(damage > 10){
     wall.shapeColor = color(255,0,0);
   }
   
   if(damage < 10){
     wall.shapeColor = color(0,255,0);
   }
 } 
 if(hasCollided(bullet2,wall2)){
  bullet2.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage > 10){
  wall2.shapeColor = color(255,0,0);                    
  }
  
  if(damage < 10){
    wall2.shapeColor = color(0,255,0);
  }
} 

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
    return false;
    
}
