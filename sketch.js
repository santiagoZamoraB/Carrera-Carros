var database;
var form
var player, game, allPlayers;
var database;
var gameState = 0;
var playerCount;
var car1, car1Image, car2, car2Image, car3,car3Imagem, car4, car4Image;

function preload(){


  
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
   
  drawSprite();
}