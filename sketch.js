const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var piso;
var teiadomiranha;
var lemon;
var colabastao;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  piso = new Piso(200,690,600,20);
  teiadomiranha=new Rope(6,{x:245,y:30});
  lemon=Bodies.circle(300,300,15);
  Matter.Composite.add(teiadomiranha.body,lemon);
  colabastao=new Fitacrepe(teiadomiranha,lemon);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  piso.tosemideia();
  teiadomiranha.show();
  ellipse(lemon.position.x,lemon.position.y,15,15);
}




