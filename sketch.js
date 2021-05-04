
var fixedRect, movingRect;
var m,f
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 f = createSprite(100, 100, 50, 80);
  f.shapeColor = "blue";
  f.debug = true;
  m = createSprite(800,100,80,30);
m.shapeColor = "blue";
  m.debug = true;
f.velocityX=3
m.velocityX=-3


}


function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x-fixedRect.x < (movingRect.width/2+fixedRect.width/2) && fixedRect.x-movingRect.x < (movingRect.width/2+fixedRect.width/2)  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

    movingRect.shapeColor = "red ";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
}
if(f.x-m.x<f.width/2+m.width/2 && m.x-f.x<f.width/2+m.width/2 ){
f.velocityX=-(f.velocityX)
m.velocityX=-(m.velocityX)
}

  drawSprites();
}