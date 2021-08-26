class Game{

    constructor(){
        
    }
    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on('value',function(data){
       gameState = data.val();

      })
    }
    getPlayerM(){
      var playerMRef = database.ref('playerM');
      playerMRef.on('value',function(data){
        playerM = data.val();
      })

    }
    updateState(state){
      database.ref('/').update({
          gameState:state
      })
    }
     updatePlayerM(M){
        database.ref('/').update({
        playerM:M
      })
    }
    async start(){
       if(gameState === 0){
           player = new Player();
           player.getCount();
           var playerCountRef = await database.ref('playerCount').once('value')
           if(playerCountRef.exists()){
               playerCount = playerCountRef.val();
               player.getCount();
           }
           form = new Form();
           form.display();
       }
         car1 = createSprite(410,300, 20, 20);
         car1.addImage(car1Image);
         car2 = createSprite(550,700, 20, 20);
         car2.addImage(car2Image);
         cars = [car1, car2];
         car1.visible = false;
         car2.visible=  false;
         //car3 = createSprite(610,700,20,20);
         
         //car4 = createSprite(750,700,20,20);
    }
    play(){
        form.hide();
        textSize(25);
        text("Arranca",400,200);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
          //console.log(cars[0].y);
          var displayPos = 150;
          background("black");
          image(pistaI,0,-displayHeight * 3, displayWidth,displayHeight * 10);
          car1.visible = true;
          car2.visible = true;
          var index = 0;
          var x = 300; 
          var y;
          for(var plr in allPlayers){
            index += 1;
            x +=225;
            y = displayHeight - allPlayers[plr].distance;
            //console.log(plr.distance);
            cars[index - 1].x = x;
            cars[index - 1].y = y;
           if(index === player.index){
             stroke(5);
             fill(255,255,255);
             ellipse(x,y,80,80);
             camera. position.x = displayWidth/2;
             camera. position.y = cars[index - 1].y;
           }                               
          }
        }
        //playerM === 1 no avanza XD
        if(keyIsDown(UP_ARROW) && player.distance < 4000 && playerM === 0){
          player.distance += 50;
          player.update();
          playerM = this.getPlayerM();
        }
        else{
          console.log(player.name);
          this.updatePlayerM(1);
        }

        
    }
    end(){

    }
}