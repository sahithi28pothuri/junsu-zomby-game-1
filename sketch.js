const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var g1,g2;
var link;
var stone;
var stones=[];
function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  bridge=new Bridge(15,{x:370,y:450});
  g1=new Ground(100,500,1000,50)
  g2=new Ground(1150,500,600,50)
  link=new Link(bridge,g2);
  Matter.Composite.add(bridge.body,g2)
  stone = Bodies.circle(300,300,15,{density:0.001});
  
  for (var i = 0; i <= 8; i++) 
  { var x = random(width / 2 - 200, width / 2 + 300);
     var y = random(-10, 140); 
     var stone = new Stone(x, y, 15); 
     stones.push(stone);
  }
}

function draw() {
  background(51);
  bridge.show();
  g1.show();
  g2.show();
  //ellipse(stone.position.x,stone.position.y,15);
  //stone.show();
  for(var stone of stones){
    stone.show();
  }
  Engine.update(engine);
}
