
var database;
var gameState=0;
var playerCount;
var game, player,form;
var allPlayers;
var c1, c2, c3, c4, cars;
function setup(){
createCanvas(displayWidth - 40,displayHeight - 60);
database = firebase.database();
    
//form = new Form();

game = new Game();
game.getState();
game.start();
//player = new Player();
   
}

function draw(){
    background("white");
  //form.display();
  //player.getCount();
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
   // drawSprites();
}






