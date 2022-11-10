var box;

function setup() {
  createCanvas(600,400);
  box=createSprite(300,200,20,20);
  box.shapeColor="blue";

}

function draw() 
{
  background(30);

  drawSprites();
if(keyDown(RIGHT_ARROW)){
  box.x=box.x+5;
}
if(keyDown(LEFT_ARROW)){
  box.x=box.x-5;
}
}




