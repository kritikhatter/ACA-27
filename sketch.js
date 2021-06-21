var bunny;
var carrot;
var edges;

function setup() {
  createCanvas(600,721);
  edges=createEdgeSprites();
 bunny= createSprite(40,680,30,30);
 carrot= createSprite(550,40,30,30);
 brick1 = createSprite(160,300,80,20);
 brick2 = createSprite(310,360,80,20);
 brick3 = createSprite(280,300,80,20);
 brick4 = createSprite(190,360,80,20);
 brick5 = createSprite(400,300,80,20);
 brick6 = createSprite(430,360,80,20);
 brick7 = createSprite(520,300,80,20);
 brick8 = createSprite(550,360,80,20);
 brick9 = createSprite(40,300,80,20);
 brick10 = createSprite(70,360,80,20);

 bunny.shapecolor = "pink"
 carrot.shapeColor = "orange"
 brick1.shapeColor = "rgb(214, 22, 182)"
 brick2.shapeColor = "rgb(214, 22, 182)"
 brick3.shapeColor = "rgb(214, 22, 182)"
 brick4.shapeColor = "rgb(214, 22, 182)"
 brick5.shapeColor = "rgb(214, 22, 182)"
 brick6.shapeColor = "rgb(214, 22, 182)"
 brick7.shapeColor = "rgb(214, 22, 182)"
 brick8.shapeColor = "rgb(214, 22, 182)"
 brick9.shapeColor = "rgb(214, 22, 182)"
 brick10.shapeColor = "rgb(214, 22, 182)"
 
 }
function draw() {
  background("black");

if(keyDown("up")){
  bunny.y=bunny.y-6;
}
if(keyDown("down")){
  bunny.y=bunny.y+6;
}
if(keyDown("left")){
  bunny.x=bunny.x-6;
}
if(keyDown("right")){
  bunny.x=bunny.x+6;
}
stroke("white");
textSize(20)

if(bunny.isTouching(carrot)){
  text("YOU WIN",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick1)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick2)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick3)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick4)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick5)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick6)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick7)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick8)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick9)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}
if(bunny.isTouching(brick10)){
  text("YOU LOSE",200,200);
  bunny.x=40;
  bunny.y=680;
}



  drawSprites();
  
}
