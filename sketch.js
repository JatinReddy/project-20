var car, wall;
var speed, weight;

function setup() {
  createCanvas(2600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  
  car.velocityX = speed;
  
  car.shapeColor = ("white");


  wall = createSprite(800,200,40,200);
  wall.shapeColor = ("black");

  
}

function draw() {
  background(80);
  
if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if (deformation>180){
  car.shapeColor = color("green");
  }
if (deformation<180 && deformation>80){
  car.shapeColor = color("yellow");
  }
if (deformation<80){
  car.shapeColor = color("red");
  }
}


  drawSprites();
}