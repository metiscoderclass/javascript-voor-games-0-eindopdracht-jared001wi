var xSize = 1334;
var ySize = 730;
var ballen = [];
var enemies = [];
var aantalBallen = 1;
var aantalEnemies = 0;
var ball1;
var ememy1;
var speler;
var speed = 10;
var punten = 0;
var aantalKeerGeraakt = 0;
var enemyMaker;
var invins = false;


function setup(){
  createCanvas(xSize, ySize);

  for (var i = 0; i < aantalBallen; i++){
    ball1 = new Ball(random(10, xSize - 10), random(10, ySize - 10), 10);
    ballen.push(ball1);
  }
  speler = new Speler(20, 60, 10);
  enemyMaker = setInterval(maakEnemy, 7000);
}
function maakEnemy(){
  enemy1 = new Enemy(random(30, xSize - 30), random(30, ySize - 30), 20, random(15, 20), random(15, 20));
  enemies.push(enemy1);
  aantalEnemies += 1;
}

function draw(){
  background(255);
  fill("red");
  textSize(32);
  text('Points: ' + punten, 10, 30);
  speler.move();
  speler.display();
  for (var i = 0; i < enemies.length; i++){
    enemies[i].display();
    enemies[i].move();
  }
  for (var i = 0; i < aantalBallen; i++){
   ballen[i].display();
   ballen[i].botsing(speler);
 }
  for (var i = 0; i < enemies.length; i++){
    enemies[i].botsing(speler);
  }
}

class Speler{
  constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  display(){
    fill("blue");
    ellipse(this.xPos, this.yPos, 3*this.radius, 3*this.radius);
  }
  move(){
    if (keyIsDown(81)){
      location.replace("index.html");
    }
    if (keyIsDown(UP_ARROW) && this.yPos >= 15 || keyIsDown(87) && this.yPos >= 15){
      this.yPos -= speed;
    }
    if (keyIsDown(DOWN_ARROW) && this.yPos <= ySize - this.radius*2|| keyIsDown(83) && this.yPos <= ySize - this.radius*2){
      this.yPos += speed;
    }
    if (keyIsDown(LEFT_ARROW) && this.xPos >= 15 || keyIsDown(65) && this.xPos >= 15){
      this.xPos -= speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.xPos <= xSize - this.radius*2 || keyIsDown(68) && this.xPos <= xSize - this.radius*2){
      this.xPos += speed;
    }
  }
}

class Ball{
  constructor(xPos, yPos, radius){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  display(){
    fill("green");
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }
  botsing(speler){
    var dx = this.xPos - speler.xPos;
    var dy = this.yPos - speler.yPos;
    if (sqrt(dx*dx + dy*dy) <= this.radius + speler.radius){
      this.xPos = random(10, xSize - 10);
      this.yPos = random(10, ySize - 10);
      punten += 1;
    }
  }
}

function cooldown(){
  invins = false;
}
class Enemy{
  constructor(xPos, yPos, radius, ySpeed, xSpeed){
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.ySpeed = ySpeed
    this.xSpeed = xSpeed
  }
  display(){
    fill("red");
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }
  move(){
    if (this.xPos >= xSize - this.radius || this.xPos < this.radius){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > ySize - this.radius || this.yPos < this.radius){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
  botsing(speler){
    var hart_1 = document.getElementById('hart-1');
    var hart_2 = document.getElementById('hart-2');
    var hart_3 = document.getElementById('hart-3');
    var hart_4 = document.getElementById('hart-4');
    var hart_5 = document.getElementById('hart-5');
    var dx = this.xPos - speler.xPos;
    var dy = this.yPos - speler.yPos;
    if (sqrt(dx*dx + dy*dy) <= this.radius + speler.radius && invins == false){
      aantalKeerGeraakt += 1;
      invins = true;
      if (aantalKeerGeraakt == 1){
        hart_5.src = "";
      }
      if (aantalKeerGeraakt == 2){
        hart_4.src = "";
      }
      if (aantalKeerGeraakt == 3){
        hart_3.src = "";
      }
      if (aantalKeerGeraakt == 4){
        hart_2.src = "";
      }
      if (aantalKeerGeraakt == 5){
        hart_1.src = "";
        alert("You got " + punten + " points!");
        location.replace("index.html");
      }
      setTimeout(cooldown, 2000);
    }
  }
}
