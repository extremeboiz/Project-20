

var  car, wall;
var speed, weight

function setup() {
  createCanvas(1600,400);
  
speed = random(55,90)
weight = random(400,1500)

car = createSprite(50,200, 50,50)

car.velocityX=speed

car.shapeColor = color(225)


wall = createSprite(1500, 200, 60, 300)

wall.shapeColor = color(255)


}

function draw() {

  if(hasCollided(bullet, wall)) { 
    bullet.velocityX=0; 
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 
    if(damage>10) { 
      wall.shapeColor=color(255,0,0); 
    } 
    if(damage<10) { 
      wall.shapeColor=color(0,255,0); 
    }
  }
  background(0);  
  drawSprites();
}
