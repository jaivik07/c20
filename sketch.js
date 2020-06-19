var movingsprit
var fixedsprit


function setup() {
  createCanvas(800,400);
  movingsprit = createSprite(400, 200, 50, 50);
  fixedsprit = createSprite(410,200,50,50)
}

function draw() {
  background(255,255,255);  
  movingsprit.x=World.mouseX
  movingsprit.y=World.mouseY
if(movingsprit.x-fixedsprit.x<movingsprit.width/2+fixedsprit.width/2){
movingsprit.shapeColor="yellow"
fixedsprit.shapeColor="yellow"


}
else{
  movingsprit.shapeColor="blue"
fixedsprit.shapeColor="blue"

}
  drawSprites();
}