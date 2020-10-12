const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body
const Bodies = Matter.Bodies;

var donut, bg;
var level = 0;


function preload(){
  bg = loadImage("bg.jpeg");
}

function setup() {
  createCanvas(1200, 1200);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Block(600,1050,1200,30);
  bar1 = new Block(300,1125,30,150);
  bar2 = new Block(900,1125,30,150);
  star = new Star(600,1000,10,10);

  pillar1 = new Block(520,885,20,300);
  pillar2 = new Block(540,895,20,280);
  pillar3 = new Block(560,905,20,260);
  pillar4 = new Block(580,915,20,240);
  pillar5 = new Block(620,915,20,240);
  pillar6 = new Block(640,905,20,260);
  pillar7 = new Block(660,895,20,280);
  pillar8 = new Block(680,885,20,300);

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
  

  if(donut != null){
    donut.display();
  }

  fill("purple");
  textSize(32);
  text("Use your mouse to drop a donut!",600,1130);
  text("Get the star to level up!",600,1180);

}

function mousePressed(){
   donut = new Donut(mouseX, 10,10);
}