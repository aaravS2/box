var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(380,24,20,20);
  movingrect.shapeColor=("green");
fixedrect.shapeColor=("green");
movingrect.debug=true;
fixedrect.debug=true;
}

function draw() {
  background(255,255,255); 
 if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   movingrect.shapeColor="red"
   fixedrect.shapeColor="red"
 }
 else {
   movingrect.shapeColor="green"
   fixedrect.shapeColor="green"
 }
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  drawSprites();
}