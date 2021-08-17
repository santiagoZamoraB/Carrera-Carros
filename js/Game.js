class Game{

    constructor(){
        
    }
    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on('value',function(data){
       gameState = data.val();

      })
    }
    updateState(state){
      database.ref('/').update({
          gameState:state
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
         car1 = createSprite(410,700, 20, 20);
         car1.addImage(car1Image);
         car2 = createSprite(550,700, 20, 20);
         car2.addImage(car2Image);
         cars = [car1, car2];
         //car3 = createSprite(610,700,20,20);
         
         //car4 = createSprite(750,700,20,20);
    }
    play(){
        form.hide();
        textSize(25);
        text("Arranca",400,200);
        background("black");
        image(pistaI,0,-displayHeight * 3, displayWidth,displayHeight * 10);
    }
    end(){

    }
}