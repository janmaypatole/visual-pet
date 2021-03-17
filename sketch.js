var dog,sadDog,happyDog;
var milk,milku


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milku=loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk=createSprite(50,200,150,150);
  milk.addImage(milku);
  milk.scale=0.10;
  
  milk=createSprite(100,200,150,150);
  milk.addImage(milku);
  milk.scale=0.10;
  
  milk=createSprite(150,200,150,150);
  milk.addImage(milku);
  milk.scale=0.10;
 
  milk=createSprite(200,200,150,150);
  milk.addImage(milku);
  milk.scale=0.10;
  
  milk=createSprite(250,200,150,150);
  milk.addImage(milku);
  milk.scale=0.10;
  
}

function draw() {
  background(46,139,87);
  drawSprites();
 
}
