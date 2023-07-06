var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var bluePlayer, redPlayer;
var bluePlayerImg, redPlayerImg;
var gameState = 0;

function preload() {
  backgroundImage = loadImage("./assets/sprite_BackGround0.png");
  bluePlayerImg = loadImage("./assets/bluePC.png");
  redPlayerImg = loadImage("./assets/redPC.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
  
  if (gameState == 1) {
    game.play();

   
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
