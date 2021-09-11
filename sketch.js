var bgImg, bg , girlImg, boyImg;
var gameState = 0;
var player, ground;
var boy, girl;
var mask, sanitizer, PPEKit, corona;
var maskImg, sanitizerImg, PPEKitImg, coronaImg;


function preload()
{
  bgImg = loadImage("images/backgroundcorona.jpg");
  boyImg = loadImage("images/coronaBoy.png");
  girlImg = loadImage("images/coronaGirl.png");
  maskImg = loadImage("images/mask.png");
  sanitizerImg = loadImage("images/sanitizer.png");
  PPEKitImg = loadImage("images/ppe kit.png");
  coronaImg = loadImage("images/corona.png");
}

function setup() 
{
  createCanvas(800,400);

  

  player = createSprite(100, 250);
  player.visibilty = "false";
  player.scale = 0.5;
  
  ground = createSprite(400, 380, 800, 20);

  boy = createSprite(200, 200);
    boy.addImage("k", boyImg);
    boy.scale = 0.5;

    girl = createSprite(600, 200);
    girl.addImage("j", girlImg);
    girl.scale = 0.5;

    
}


function draw() 
{
  
  background(bgImg);
  
 

  if(gameState === 0)
  {
    
  
    
    
    fill("black");
    textSize(30);
    text("Let us start! Please choose a character to continue", 20, 50);
    
    if(keyWentDown("left_arrow"))
    {
      player.addImage("k", boyImg);
      player.visibilty = "true";
      girl.destroy();
      boy.destroy();
      gameState = 1;
    }

    if(keyWentDown("right_arrow"))
    {
      player.addImage("j", girlImg);
      player.visibilty = "true";
      girl.destroy();
      boy.destroy();
      gameState = 1;
    }
  }

  if(gameState === 1)
  {
    spawnMask();
    spawnSani();
    spawnKit();
  }

  
    
  



  drawSprites();
}

function spawnMask()
{
  if(frameCount%180 === 0)
  {
    mask = createSprite(820, random(50,300), 80, 80);
    mask.addImage("l", maskImg);
    mask.scale = 0.15;
    mask.velocityX = -5;
    mask.lifetime = 180;
  }
}

function spawnSani()
{
  if(frameCount%80 === 0)
  {
    sanitizer = createSprite(820, random(50,300), 80, 80);
    sanitizer.addImage("l", sanitizerImg);
    sanitizer.scale = 0.15;
    sanitizer.velocityX = -5;
    sanitizer.lifetime = 180;
  }
}

function spawnKit()
{
  if(frameCount%200 === 0)
  {
    PPEKit = createSprite(820, random(50,350), 80, 80);
    PPEKit.addImage("l", PPEKitImg);
    PPEKit.scale = 0.2;
    PPEKit.velocityX = -5;
    PPEKit.lifetime = 180;
  }
}