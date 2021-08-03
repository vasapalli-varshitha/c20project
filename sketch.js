  var bg,sleep,brush,gym,eat,drink,move,bath;

  function preload(){
    //createCanvas(600,200);
    bg = loadImage("iss.png");
    sleep = loadAnimation("sleep.png");
    brush = loadAnimation("brush.png");
    gym = loadAnimation("gym1.png","gym2.png","gym11.png");
    eat = loadAnimation("eat1.png","eat2.png");
    drink = loadAnimation("drink1.png","drink2.png");
    move = loadAnimation("move.png","move1.png");
    bath = loadAnimation("bath1.png","bath2.png");
  
  }


  function setup() {
    createCanvas(800,400);

    bg_1=createSprite(400,200);
    bg_1.addImage(bg);
    bg_1.scale=0.2;
    astronaut = createSprite(300,230);
    astronaut.addAnimation("brushing",brush);
    astronaut.scale = 0.1;
  }

  function draw() {
    background(255,255,255);  
    if(keyDown("UP_ARROW"))
    {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
  if(keyDown("DOWN_ARROW"))
    {
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y = 250;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }
  if(keyDown("RIGHT_ARROW"))
    {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    }
  if(keyDown("LEFT_ARROW"))
    {
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 250;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }

  if(keyDown("S"))
  {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("V"))
    {
      astronaut.addAnimation("sleeping",sleep);
      astronaut.changeAnimation("sleeping");
      astronaut.y = 250;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
    }
  
    drawSprites();

  }

