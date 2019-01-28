var xSize = 1334;
var ySize = 730;
var d_setting = 1
var groen = setInterval(function(){ fill("green"); }, 1);

function setup(){
  createCanvas(xSize, ySize);
}

function draw(){
  background(255);
  textSize(50);
  if (keyIsDown(49)){
    d_setting = 1;
    fill("green");
    clearInterval(groen);
  }
  if (keyIsDown(50)){
    d_setting = 2;
    fill("orange");
    clearInterval(groen);
  }
  if (keyIsDown(51)){
    d_setting = 3;
    fill("red");
    clearInterval(groen);
  }
  text("BallGame", 550, 150);
  text("Press space to start", 900/2, 600);
  if (keyIsDown(32) && d_setting == 1){
    location.replace("spel.html");
  }
  if (keyIsDown(32) && d_setting == 2){
    location.replace("spel-2.html");
  }
  if (keyIsDown(32) && d_setting == 3){
    location.replace("spel-3.html");
  }
}
