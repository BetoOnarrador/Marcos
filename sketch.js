var bola;
function setup() {
  createCanvas(200,200);
bola=createSprite(10,10,10,10)
  
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown(UP_ARROW)){
  background("red");
bola.y=bola.y-2

}
if (keyDown(DOWN_ARROW)){
  background("green");
  bola.y=bola.y+2
  
  }if (keyDown(RIGHT_ARROW)){
    background("pink");
    bola.x=bola.x+2
    
    }if (keyDown(LEFT_ARROW)){
      background("orange");
      bola.x=bola.x-2
      
      }
}
//não quero morrer xd




