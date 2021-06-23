var scenery, sceneryImg;
var groupRedBalloons 
var groupGreenBalloons
var groupYellowBalloons
var groupBlueBalloons
var grouparrows
var arrow, arrowImg, arrow2, arrow2Img;
var bow, bowImg, bow2, bow2Img;
var rand, PC=0, GS;
var score = 0;
var redBalloon, balloonRed, greenBalloon, balloonGreen, blueBalloon, balloonBlue, yellowBalloon, balloonYellow;
var redBalloonImg,balloonRedImg,blueBalloonImg,balloonBlueImg,greenBalloonImg,balloonGreenImg,yellowBalloonImg,balloonYellowImg
var form, player, bows = [];

function preload(){
	sceneryImg=loadImage("images/bg.jpg");
	bowImg=loadImage("images/bow.jpg");
    bow2Img=loadImage("images/bow2.jpg");
    arrowImg = loadImage("images/arrow.png");
    arrow2Img = loadImage("images/arrow2.png");
    redBalloonImg =loadImage("images/red.png");
    blueBalloonImg =loadImage("images/blue.png");
    balloonBlueImg =loadImage("images/blue.png");
    greenBalloonImg =loadImage("images/green.png");
    balloonGreenImg =loadImage("images/green.png");
    yellowBalloonImg =loadImage("images/yellow.png");
    balloonRedImg =loadImage("images/red.png");
    balloonYellowImg =loadImage("images/yellow.png");
}

function setup(){
    createCanvas(1700,790)

    rand = random(1, 8);
    scenery=createSprite(850, 400,50,50);
	scenery.addImage(sceneryImg)
	scenery.scale = 2.5;
  /*  bow = createSprite(100, 200);
    bow.addImage(bowImg)
    bow.scale = 0.8
    bow2 = createSprite(1600, 200);
    bow2.addImage(bow2Img)
    bow2.scale = 1.5*/
    database = firebase.database();   
    form = new Form()
    player = new Player()

    groupRedBalloons = createGroup();
    groupGreenBalloons = createGroup();
    groupYellowBalloons = createGroup();
    groupBlueBalloons = createGroup();
    grouparrows = createGroup();
    grouparrows2 = createGroup();

}

function draw(){
    background("white");
  
  
    createEdgeSprites();
  
   // bow.y = mouseY;
   //scenery.velocityX = -12;
  if (scenery.x<500) {
      scenery.x = 1200;
   }

  // player.display()
   form.display()

   //SpawnBalloon();

   /*if (keyWentDown("space")) {
    functionarrow();
  }
  
  if (keyWentDown("enter")) {
    functionarrow2();
  }
  
    
  if () {
    groupRedBalloons.destroyEach();
    score = score+2;
  }
  if (groupYellowBalloons.isTouching(grouparrows)) {
    groupYellowBalloons.destroyEach();
    score = score+2;
  }
  if (groupGreenBalloons.isTouching(grouparrows)) {
    groupGreenBalloons.destroyEach();
    score = score+2;
  }
  if (groupBlueBalloons.isTouching(grouparrows)) {
    groupBlueBalloons.destroyEach();
    score = score+2;
  }
  if (groupRedBalloons.isTouching(grouparrows2)) {
    groupRedBalloons.destroyEach();
    score = score+2;
  }
  if (groupYellowBalloons.isTouching(grouparrows2)) {
    groupYellowBalloons.destroyEach();
    score = score+2;
  }
  if (groupGreenBalloons.isTouching(grouparrows2)) {
    groupGreenBalloons.destroyEach();
    score = score+2;
  }
  if (groupBlueBalloons.isTouching(grouparrows2)) {
    groupBlueBalloons.destroyEach();
    score = score+2;
  }
  */ 
  drawSprites();
  /*
  fill(rgb(150, 100, 200));
  textSize(30);
  text("score = "+score, 280, 60);

}

function functionarrow() {
    arrow = createSprite(100, 200);
    arrow.addImage(arrowImg)
  arrow.scale = 1.8
  arrow.y = bow2.y;
  arrow.x = bow2.x;
  arrow.velocityX = -50;
  grouparrows.add(arrow);
}

function functionarrow2() {
    arrow2 = createSprite(100, 200);
    arrow2.addImage(arrow2Img)
    arrow2.scale = 0.25
    arrow2.y = bow.y;
    arrow2.x = bow.x;
    arrow2.velocityX = 50;
    grouparrows2.add(arrow2);
  }

  
function SpawnBalloon() {
 
  if ((rand===1||rand===2)&&World.frameCount%50===0) {
    if (rand===1) {
     redBalloon = createSprite(0, randomNumber(10, 150), 20, 20);
     redBalloon.setAnimation("red");
      redBalloon.velocityX = 3;
      groupRedBalloons.add(redBalloon);
      if (grouparrow2s.isTouching(redBalloon)) {
        redBalloon.destroy();
        score = score+2;
      }
    }
    if (rand===2) {
      balloonRed = createSprite(0, randomNumber(150, 390), 20, 20);
      balloonRed.setAnimation("red");
      balloonRed.velocityX = 5;
      groupRedBalloons.add(balloonRed);
      if (grouparrow2s.isTouching(balloonRed)) {
        balloonRed.destroy();
        score = score+2;
      }
    }
  }
  if ((rand===3||rand===4)&&World.frameCount%60===0) {
    if (rand===3) {
       greenBalloon = createSprite(0, randomNumber(10, 150), 20, 20);
      greenBalloon.setAnimation("green");
      greenBalloon.velocityX = 3;
      groupGreenBalloons.add(greenBalloon);
      if (grouparrow2s.isTouching(greenBalloon)) {
        greenBalloon.destroy();
        score = score+2;
      }
    }
    if (rand===4) {
       balloonGreen = createSprite(0, randomNumber(150, 390), 20, 20);
      balloonGreen.setAnimation("green");
      balloonGreen.velocityX = 4;
      groupGreenBalloons.add(balloonGreen);
      if (grouparrow2s.isTouching(balloonGreen)) {
        balloonGreen.destroy();
        score = score+2;
      }
    }
  }
  if ((rand===5||rand===6)&&World.frameCount%40===0) {
    if (rand===5) {
       blueBalloon = createSprite(0, randomNumber(10, 150), 20, 20);
      blueBalloon.setAnimation("blue");
      blueBalloon.velocityX = 5;
      groupGreenBalloons.add(blueBalloon);
      if (grouparrow2s.isTouching(blueBalloon)) {
        blueBalloon.destroy();
        score = score+2;
      }
    }
    if (rand===6) {
       balloonBlue = createSprite(0, randomNumber(150, 390), 20, 20);
      balloonBlue.setAnimation("blue");
      balloonBlue.velocityX = 2;
      groupGreenBalloons.add(balloonBlue);
      if (grouparrow2s.isTouching(balloonBlue)) {
        balloonBlue.destroy();
        score = score+2;
      }
    }
  }
  if ((rand===7||rand===8)&&World.frameCount%60===0) {
    if (rand===7) {
       yellowBalloon = createSprite(0, randomNumber(10, 150), 20, 20);
      yellowBalloon.setAnimation("yellow");
      yellowBalloon.velocityX = 6;
      groupYellowBalloons.add(yellowBalloon);
      if (grouparrow2s.isTouching(yellowBalloon)) {
        yellowBalloon.destroy();
        score = score+2;
      }
    }
    if (rand===8) {
       balloonYellow = createSprite(0, randomNumber(150, 390), 20, 20);
      balloonYellow.setAnimation("yellow");
      balloonYellow.velocityX = 3;
      groupYellowBalloons.add(balloonYellow);
      if (grouparrow2s.isTouching(balloonYellow)) {
        balloonYellow.destroy();
        score = score+2;
      }
    }
  }
*/}
