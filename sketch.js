var fixedRect, movingRect;
var rect1, rect2, rect3;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,80,30);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  
  rect1 = createSprite(100,100,80,40);
  rect1.shapeColor = "yellow";
}



function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, rect1)){
    rect1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    rect1.shapeColor = "yellow";
    movingRect.shapeColor = "red";
  }

  drawSprites();

}

//declaring the isTouching()
function isTouching(object1,object2){
  if(object1.x -object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y -object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y< object2.height/2 + object1.height/2) {
    return true;
  }
  else{
    return false;
  }
}