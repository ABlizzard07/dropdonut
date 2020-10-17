const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body
const Bodies = Matter.Bodies;

var donut, bg, ding;
var level = 1, tries = 0;

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

  if(level == 1){
    Body.setPosition(pillar1.body, {x: 520, y: 885});
    Body.setPosition(pillar2.body, {x: 540, y: 895});
    Body.setPosition(pillar3.body, {x: 560, y: 905});
    Body.setPosition(pillar4.body, {x: 580, y: 915});
    Body.setPosition(pillar5.body, {x: 620, y: 915});
    Body.setPosition(pillar6.body, {x: 640, y: 905});
    Body.setPosition(pillar7.body, {x: 660, y: 895});
    Body.setPosition(pillar8.body, {x: 680, y: 885});

    Body.setPosition(side1.body, {x: 150, y: 200});
    Body.setPosition(side2.body, {x: 140, y: 225});
    Body.setPosition(side3.body, {x: 130, y: 250});
    Body.setPosition(side4.body, {x: 120, y: 275});
    Body.setPosition(side5.body, {x: 1050, y: 200});
    Body.setPosition(side6.body, {x: 1060, y: 225});
    Body.setPosition(side7.body, {x: 1070, y: 250});
    Body.setPosition(side8.body, {x: 1080, y: 275});

    Body.setPosition(star.body, {x: 600, y: 800});
  }

  if(level == 2){
    Body.setPosition(side2.body, {x: 180 , y: 240}); 
    Body.setPosition(side3.body, {x: -90 , y: 240}); 
    Body.setPosition(star.body, {x: 285, y: 220});
    Body.setPosition(side6.body, {x: 1020 , y: 240}); 
    Body.setPosition(side7.body, {x: 1290 , y: 240}); 
  }

  if(level == 3){
    Body.setPosition(pillar4.body, {x: 520, y: 615});
    Body.setPosition(pillar5.body, {x: 680, y: 615});
    Body.setPosition(pillar3.body, {x: 520, y: 365});
    Body.setPosition(pillar6.body, {x: 680, y: 365});
    Body.setPosition(side2.body, {x: 440, y: 200});
    Body.setPosition(side6.body, {x: 760, y: 200});
    Body.setPosition(star.body, {x: 540, y: 750});
  }

  fill("purple");
  textSize(32);
  text("Use your mouse to drop a donut!",600,1130);
  text("Get the star to level up!",600,1180);

  if(level < 4){
    text("Level: "+level,150,1150);
  }
    text("Tries: "+tries,1050,1150);

  if(level == 4){
    fill("red");

    text("Press your mouse to try again",600,140);
    textSize(44);

     if(tries <= 3){
        text("God Rank",600,100);
     }
     else if(tries > 3 && tries <= 6){
        text("Master Rank",600,100);
     }
     else if(tries > 6 && tries <= 10){
        text("Expert Rank",600,100);
     }
     else if(tries > 10 && tries <= 15){
       text("Amateur Rank",600,100);
     }
     else if(tries > 15 && tries <= 21){
       text("Beginner Rank",600,100);
     }
     else{
       text("GIT GUD",600,100);
     }

  }
}

function mousePressed(){
  Body.setPosition(donut.body, {x: mouseX , y: 10}); 
  Body.setStatic(donut.body,false);
  tries += 1;

  if(level == 4){
    level = 1;
    tries = 0;
  }
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