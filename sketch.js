
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,rock,tree
var mang1,mang2,mang3,mang4,mang5,mang6,mang7,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	mang1 = new mango(900,150,8);
	mang2 = new mango(950,120,10);
	mang3 = new mango(1000,100,7);
	mang4 = new mango(950,60,9);
	mang5 = new mango(1050,60,6);
	mang6 = new mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	mang1.display();
	mang2.display();
	mang3.display();
	mang4.display();
	mang5.display();
	mang6.display();
	collision(rock,mang1);
	collision(rock,mang2);
	collision(rock,mang3);
	collision(rock,mang4);
	collision(rock,mang5);
	collision(rock,mang6);

	strokeWeight(0);
	stroke(0);
	fill(255);
    text(' Pluck the Mangoes ', 285, 22);
	
}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}