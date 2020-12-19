const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;  
    
    box1 = new Box(330, 235, 30, 40);
    box2 = new Box(360, 235, 30, 40);
    box3 = new Box(390, 235, 30, 40);
    box4 = new Box(420, 235, 30, 40);
    box5 = new Box(450, 235, 30, 40);
    box6 = new Box(360, 195, 30, 40);
    box7 = new Box(390, 195, 30, 40);
    box8 = new Box(420, 195, 30, 40);
    box9 = new Box(390, 155, 30, 40);

    ground = new Ground(600, 380, 1200, 20);

    polygon = new Polygon(100, 370, 30, 30);

    chain = new SlingShot(polygon.body, {x: 100, y: 200});
}

function draw(){
    background(0);

    Engine.update(engine);

    box1.display();
    box2.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ground.display();

    chain.display();

    polygon.display();
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }

function mouseReleased(){
    chain.fly();
}