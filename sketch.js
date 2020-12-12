const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24;
var polygon;
var slingshot;


function setup(){
  engine = Engine.create();
  world = engine.world;
  stand1 = new Ground(350,380,100,20);
  stand2 = new Ground(590,270,100,20);
  box1 = new Box(310,355,20,30);
  box2 = new Box(330,355,20,30);
  box3 = new Box(350,355,20,30);
  box4 = new Box(370,355,20,30);
  box5 = new Box(390,355,20,30);
  box6 = new Box(318,322,20,30);
  box7 = new Box(338,322,20,30);
  box8 = new Box(358,322,20,30);
  box9 = new Box(378,322,20,30);
  box10 = new Box(325,292,20,30);
  box11 = new Box(345,292,20,30);
  box12 = new Box(365,292,20,30);
  box13 = new Box(550,245,20,30);
  box14 = new Box(570,245,20,30);
  box15 = new Box(590,245,20,30);
  box16 = new Box(610,245,20,30);
  box17 = new Box(630,245,20,30);
  box18 = new Box(558,215,20,30);
  box19 = new Box(578,215,20,30);
  box20 = new Box(598,215,20,30);
  box21 = new Box(618,215,20,30);
  box22 = new Box(565,185,20,30);
  box23 = new Box(585,185,20,30);
  box24 = new Box(605,185,20,30);
  polygon = new Polygon(100,320,50,50);
  slingshot = new Slingshot(polygon.body,{x:100,y:330});
  console.log(slingshot)
  
}


function draw(){
   var canvas = createCanvas(800,800);
   background(209,232,247);
   Engine.update(engine);
   stand1.display();
   stand2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   polygon.display();
   slingshot.display();
   
   drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
slingshot.fly();
  
}
