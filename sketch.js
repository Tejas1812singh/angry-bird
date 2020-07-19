const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box1;
var box2;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,10,ground_options);
    World.add(world,ground);

    

        box1=new box(700,320,50,50);
        box2=new box(900,320,50,50);

        pig=new Pig(800,320);
        log=new LOG(770,100,100,PI/2);

    
    

  
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);

    box1.display();
    box2.display();

    pig.display();

    log.display();

    
}