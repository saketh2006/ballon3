
var ballon
var backgroundImage



function preload(){
  backgroundImage=loadImage("Hot Air Ballon-01.png");
   ballonImage = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}

function setup() {
     database = firebase.database();
     console.log(database);
  createCanvas(500,500);


  ballon=createSprite(400, 200, 50, 50);
  ballon.addAnimation("ballon",ballonImage);
  ballon.scale = 0.4;
}


function draw() {
  background(backgroundImage);  
  
  if(keyDown(LEFT_ARROW)){
    ballon.x = ballon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    ballon.x = ballon.x +10;
  }
   else if(keyDown(UP_ARROW)){
    ballon.y = ballon.y -10;
  }
   else if(keyDown(DOWN_ARROW)){
    ballon.y = ballon.y +10;
  }


  drawSprites();
}