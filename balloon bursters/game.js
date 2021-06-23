class Game {
    constructor(){
  
    }
  
    readState(){
      var GSRef  = database.ref('gameState').once("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var PCref = await database.ref('playerCount').once("value");
        if(PCref.exists()){
          playerCount = PCref.val();
          player.readCount();
        }
        form = new Form()
        form.display();
      }
  
      bow1 = createSprite(100,200);
      bow1.addImage("bow1",bowImg);
      bow2 = createSprite(300,200);
      bow2.addImage("bow2",bow2Img);
    }
  
    play(){
      form.hide();
      
      Player.readPlayerInfo();

      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(sceneryImg, 850, 400,50,50);
                       
        //index of the array
        var index = 0;
  
        //x and y position of the bows
        var x = 100 ;
       // var y;
    
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
          
          //position the bows a little away from each other in x direction
          x = x + 600;
          //use data form the database to display the bows in y direction
         // y = displayHeight - allPlayers[plr].score;
  
        
          bows[index-1].x = x;
          
         // console.log(index, player.index)
  
        
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            bows[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            bows[index].y = mouseY
           // camera.position.y = bows[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].score, 120,display_position)
        }
  
      }
  
      if((groupRedBalloons.isTouching(grouparrows)||groupBlueBalloons.isTouching(grouparrows)||groupGreenBalloons.isTouching(grouparrows)||groupYellowBalloons.isTouching(grouparrows)) && player.index !== null){
        player.score +=2
        player.update();
      }
      if (groupRedBalloons.isTouching(grouparrows)){
        groupRedBalloons.destroyEach();
      }
      if (groupBlueBalloons.isTouching(grouparrows)){
        groupBlueBalloons.destroyEach();
      }
      if (groupGreenBalloons.isTouching(grouparrows)){
        groupGreenBalloons.destroyEach();
      }
      if (groupYellowBalloons.isTouching(grouparrows)){
        groupYellowBalloons.destroyEach();
      }

  
      if(player.score > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      text("Game Ended", 100,200);
      text(player.rank, 100,300);
    }
  }
  