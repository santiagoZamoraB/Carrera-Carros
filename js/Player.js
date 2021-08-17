class Player{

    constructor(){
 
      this.index = null;
      this.name = null;
      this.distance = 0;
      
    }
    update(){
      var playerIndex = 'players/player' + this.index;
      database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance

      })
    }
    getCount(){
      var pcr = database.ref('playerCount');
      pcr.on('value',function(data){
          pcr = data.val();
      })
    }
    updateCount(count){
      database.ref('/').update({
          playerCount:count
      })
   
    }
    static getPlayerInfo(){
      console.log("hola");
      var playerInfoRef = database.ref('players');
      playerInfoRef.on('value',(data)=>{
        allPlayers = data.val();
      })
    }
}