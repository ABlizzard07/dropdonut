const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body
const Bodies = Matter.Bodies;

var donut, bg; 
var ground, bar1, bar2;

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

  Engine.run(engine);
}
 
function draw() {
  background(bg);
  textAlign(CENTER);
  
  ground.display();
  bar1.display();
  bar2.display();

  if(donut != null){
    donut.display();
  }

  fill("red");
  textSize(32);
  text("Use your mouse to drop a donut!",600,1150);

}

function mousePressed(){
   donut = new Donut(mouseX, 10,10);
}