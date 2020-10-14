const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body
const Bodies = Matter.Bodies;

var donut, bg, ding;
var level = 1;


function preload(){
  bg = loadImage("bg.jpeg");
  ding = loadSound("ding.mp3");
}

function setup() {
  createCanvas(1200, 1200);

  engine = Engine.create();
  world = engine.world;
  
  donut = new Donut(600,-10,10);

  ground = new Block(600,1050,1200,30);
  bar1 = new Block(300,1125,30,150);
  bar2 = new Block(900,1125,30,150);
  star = new Star(600,800,10,10);

  pillar1 = new Block(520,885,20,300);
  pillar2 = new Block(540,895,20,280);
  pillar3 = new Block(560,905,20,260);
  pillar4 = new Block(580,915,20,240);
  pillar5 = new Block(620,915,20,240);
  pillar6 = new Block(640,905,20,260);
  pillar7 = new Block(660,895,20,280);
  pillar8 = new Block(680,885,20,300);

  side1 = new Block(150,200,300,20);
  side2 = new Block(140,225,280,20);
  side3 = new Block(130,250,260,20);
  side4 = new Block(120,275,240,20);
  side5 = new Block(1050,200,300,20);
  side6 = new Block(1060,225,280,20);
  side7 = new Block(1070,250,260,20);
  side8 = new Block(1080,275,240,20);

  Engine.run(engine);
}
 
function draw() {
  background(bg);
  textAlign(CENTER);
  
  ground.display();
  bar1.display();
  bar2.display();
  star.display();

  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  pillar8.display();

  side1.display();
  side2.display();
  side3.display();
  side4.display();
  side5.display();
  side6.display();
  side7.display();
  side8.display();

  donut.display();

  detectCollision(donut,star);

  if(level == 2){
    Body.setPosition(side2.body, {x: 180 , y: 240}); 
    Body.setPosition(side3.body, {x: -90 , y: 240}); 
    Body.setPosition(star.body, {x: 285, y: 220});
    Body.setPosition(side6.body, {x: 1020 , y: 240}); 
    Body.setPosition(side7.body, {x: 1290 , y: 240}); 
  }

  fill("purple");
  textSize(32);
  text("Use your mouse to drop a donut!",600,1130);
  text("Get the star to level up!",600,1180);

  text("Level: "+level,150,1150);
}

function mousePressed(){
  Body.setPosition(donut.body, {x: mouseX , y: 10}); 
  Body.setStatic(donut.body,false);
}

function detectCollision(ldonut,lstar){
  donutpos = ldonut.body.position;
  starpos = lstar.body.position;

  var distance = dist(donutpos.x,donutpos.y,starpos.x,starpos.y);
  if(distance <= 35){
    level += 1;
    Body.setPosition(donut.body, {x: 600 , y: 0}); 
    Body.setStatic(donut.body,true);
    ding.play();
  }
}