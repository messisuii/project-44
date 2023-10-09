var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart1,heart2,heart3

var gunshot
var win
var shooter1
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
gunshot=loadSound("assets/lose.mp3")
//shooter1=loadImage("assets/shooter_1.png")
bgImg = loadImage("assets/bg.jpeg")
//heart1=loadImage("assets/heart_1.png")
//heart2=loadImage("assets/heart_2.png")
//heart3=loadImage("assets/heart_3.png")
//win=loadImage("assets/win.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
//bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 //player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)



}
function spawn(){
if(framecount%60==0){
var ghost=createSprite(40,50,120,60)
ghost.velocityX=-20
}
}
function zombies(){
  if(framecount%20==0){
  var zombies=createSprite(50,70,70,20)
zombies.scale=0.5
zombies.velocityX=-26
  }
}
function draw() {
  background(0); 
spawn()
zombies()


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 //gunshot.playSound()
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("s")){
  //player.addImage(shooterImg)
}

drawSprites();

}
