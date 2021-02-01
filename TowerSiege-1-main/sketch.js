const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var rope;
var roof1,roof2;

function preLoad(){
    polygon = loadImage("polygon.png")
}

function setup(){
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 490, 1500, 20);

roof1 = new Ground(450,350,250,20)

roof2 = new Ground(800,200,210,20)

 polygon = new Polygon(150, 300, 40);

 rope = new Rope(polygon.body,{x:150,y:300})

 block1 = new Block(360,320,30,40)
 block2 = new Block(390,320,30,40)
 block3 = new Block(420,320,30,40)
 block4 = new Block(450,320,30,40)
 block5 = new Block(480,320,30,40)
 block6 = new Block(510,320,30,40)
 block7 = new Block(540,320,30,40)

 block8 = new Block(390,280,30,40)
 block9 = new Block(420,280,30,40)
 block10 = new Block(450,280,30,40)
 block11 = new Block(480,280,30,40)
 block12 = new Block(510,280,30,40)

 block13 = new Block(420,240,30,40)
 block14 = new Block(450,240,30,40)
 block15 = new Block(480,240,30,40)

 block16 = new Block(450,200,30,40)

 block17 = new Block2(740,180,30,40)
 block18 = new Block2(770,180,30,40)
 block19 = new Block2(800,180,30,40)
 block20 = new Block2(830,180,30,40)
 block21 = new Block2(860,180,30,40)

 block22 = new Block2(770,140,30,40)
 block23 = new Block2(800,140,30,40)
 block24 = new Block2(830,140,30,40)

 block25 = new Block2(800,100,30,40)


 

}

function draw(){
    background(60,46,46);
  Engine.update(engine);

  ground.display();

  polygon.display();

  roof1.display();
  roof2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();

block25.display();

rope.display();

fill(255)
textSize(25)
text("Drag the hexagonal stone & release it towards the blocks.  ",200,50)


}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   rope.fly();
}

