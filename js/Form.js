class Form{
    constructor(){
      this.title = createElement('h1');
      this. inputN= createInput().attribute("placeholder", "name");
      this.playButton = createButton("play");
      this. greetings = createElement('h2');
      this. rButton = createButton("Reinicio");

    }
      hide(){
       this.greetings.hide();
       this.title.hide();
       this.inputN.hide();
       this.playButton.hide();

      }
    display(){
      this.title.html('car racing');
      this.title.position(displayWidth/2- 20,displayHeight/4);
      this.inputN.position(displayWidth/2-100,displayHeight /3 );
      this.playButton.position(displayWidth/2 - 10,displayHeight / 2 - 75);
      //Function anonima para presionar el boton
      this.playButton.mousePressed(()=>{
        this.inputN.hide();
        this.playButton.hide();
        player.name = this.inputN.value();
        playerCount += 1
        player.index = playerCount;
        player.updateCount(playerCount);
        player.update();
        this.greetings.html("hola bienvenido "+ player.name);
        console.log("ete es el index" + player.index);
        this. greetings.position(displayWidth/2-100,displayHeight /3 )
        this. rButton.position(displayWidth/ 2 + 740,displayHeight / 10 - 80);
      })

      this.rButton.mousePressed(()=>{
       window.location.reload();
        

      })

    }

}