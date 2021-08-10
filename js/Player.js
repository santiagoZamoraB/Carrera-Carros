class Player{

    constructor(){
 
      this.index = null;
      this.name = null;
      this.distance = 0;
      
    }
    update(){
      var playerIndex = 'players/player' + this.index;
      database.ref(playerIndex).set({
        name: this.name

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
}