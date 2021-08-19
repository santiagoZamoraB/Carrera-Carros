var database;
var form
var player, game, allPlayers;
var database;
var gameState = 0;
var playerCount = 0;
var car1, car1Image, car2, car2Image, car3,car3Imagem, car4, car4Image;
var pista, pistaI;
var cars = [] 

function preload(){
 car1Image = loadImage("../images/car1.png");
 car2Image = loadImage("../images/car2.png");
 car3Image = loadImage("../images/car3.png");
 car4Image = loadImage("../images/car4.png");
 pistaI = loadImage("../images/track.jpg");
  
}

function setup(){
  createCanvas(displayWidth-50, displayHeight-100);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
  
  

}

function draw(){
  
  //form.display();
  console.log(gameState);
  if(playerCount === 2){
    game.updateState(1);
    
    
  }
  if(gameState === 1){
    clear();
    game.play();
  } 

  drawSprites();
}