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
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  donut = new Donut(600,-10,10);

  ground = new Block(windowWidth/2,(21/24)*windowHeight,windowWidth,windowHeight/40);
  bar1 = new Block(windowWidth/4,(15/16)*windowHeight,windowWidth/40,windowHeight/8);
  bar2 = new Block(3/4*windowWidth,(15/16)*windowHeight,windowWidth/40,windowHeight/8);
  star = new Star(600,800,10,10);

  pillar1 = new Block(520,885,windowWidth/60,(30/120)*windowHeight);
  pillar2 = new Block(540,895,windowWidth/60,(28/120)*windowHeight);
  pillar3 = new Block(560,905,windowWidth/60,(26/120)*windowHeight);
  pillar4 = new Block(580,915,windowWidth/60,(24/120)*windowHeight);
  pillar5 = new Block(620,915,windowWidth/60,(24/120)*windowHeight);
  pillar6 = new Block(640,905,windowWidth/60,(26/120)*windowHeight);
  pillar7 = new Block(660,895,windowWidth/60,(28/120)*windowHeight);
  pillar8 = new Block(680,885,windowWidth/60,(30/120)*windowHeight);

  side1 = new Block(150,200,windowWidth/4,windowHeight/60);
  side2 = new Block(140,225,(28/120)*windowWidth,windowHeight/60);
  side3 = new Block(130,250,(26/120)*windowWidth,windowHeight/60);
  side4 = new Block(120,275,(24/120)*windowWidth,windowHeight/60);
  side5 = new Block(1050,200,windowWidth/4,windowHeight/60);
  side6 = new Block(1060,225,(28/120)*windowWidth,windowHeight/60);
  side7 = new Block(1070,250,(26/120)*windowWidth,windowHeight/60);
  side8 = new Block(1080,275,(24/120)*windowWidth,windowHeight/60);

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
    Body.setPosition(pillar1.body, {x: (52/120)*windowWidth, y: (885/1200)*windowHeight});
    Body.setPosition(pillar2.body, {x: (54/120)*windowWidth, y: (895/1200)*windowHeight});
    Body.setPosition(pillar3.body, {x: (56/120)*windowWidth, y: (905/1200)*windowHeight});
    Body.setPosition(pillar4.body, {x: (58/120)*windowWidth, y: (915/1200)*windowHeight});
    Body.setPosition(pillar5.body, {x: (62/120)*windowWidth, y: (915/1200)*windowHeight});
    Body.setPosition(pillar6.body, {x: (64/120)*windowWidth, y: (905/1200)*windowHeight});
    Body.setPosition(pillar7.body, {x: (66/120)*windowWidth, y: (895/1200)*windowHeight});
    Body.setPosition(pillar8.body, {x: (68/120)*windowWidth, y: (885/1200)*windowHeight});

    Body.setPosition(side1.body, {x: (15/120)*windowWidth, y: (200/1200)*windowHeight});
    Body.setPosition(side2.body, {x: (14/120)*windowWidth, y: (225/1200)*windowHeight});
    Body.setPosition(side3.body, {x: (13/120)*windowWidth, y: (250/1200)*windowHeight});
    Body.setPosition(side4.body, {x: (12/120)*windowWidth, y: (275/1200)*windowHeight});
    Body.setPosition(side5.body, {x: (105/120)*windowWidth, y: (200/1200)*windowHeight});
    Body.setPosition(side6.body, {x: (106/120)*windowWidth, y: (225/1200)*windowHeight});
    Body.setPosition(side7.body, {x: (107/120)*windowWidth, y: (250/1200)*windowHeight});
    Body.setPosition(side8.body, {x: (108/120)*windowWidth, y: (275/1200)*windowHeight});

    Body.setPosition(star.body, {x: windowWidth/2, y: 2/3*windowHeight});
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
  if(windowWidth > 700){
    textSize(32);
  }
  else{
    textSize(8);
  }
  text("Use your mouse to drop a donut!",windowWidth/2,(113/120)*windowHeight);
  text("Get the star to level up!",windowWidth/2,(59/60)*windowHeight);

  if(level < 4){
    text("Level: "+level,windowWidth/8,(23/24)*windowHeight);
  }
    text("Tries: "+tries,7/8*windowWidth,(23/24)*windowHeight);

  if(level == 4){
    fill("red");

    text("Press your mouse to try again",600,140);
    textSize(44);

     if(tries <= 3){
        text("God Rank",windowWidth/2,windowHeight/12);
     }
     else if(tries > 3 && tries <= 6){
        text("Master Rank",windowWidth/2,windowHeight/12);
     }
     else if(tries > 6 && tries <= 10){
        text("Expert Rank",windowWidth/2,windowHeight/12);
     }
     else if(tries > 10 && tries <= 15){
       text("Amateur Rank",windowWidth/2,windowHeight/12);
     }
     else if(tries > 15 && tries <= 21){
       text("Beginner Rank",windowWidth/2,windowHeight/12);
     }
     else{
       text("GIT GUD",windowWidth/2,windowHeight/12);
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