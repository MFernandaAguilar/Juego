var spaceImg, space;
var naveImg, nave;

function preload(){
  spaceImg = loadImage("./imagenes/space1.jpg");
  naveImg = loadImage("./imagenes/nave.png");
  
}

function setup(){
  createCanvas(600,600);

  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 4 ;
  space.scale = 1;

  nave = createSprite(300,450);
  nave.addImage("nave",naveImg);
  nave.scale = 0.2;

}

function draw(){
  background(0);
  
    /*if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }*/
    if(space.y > 500){
      space.y = 300
    }

    drawSprites();

}

