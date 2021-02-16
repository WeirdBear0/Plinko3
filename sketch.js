var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var xPosText = [415,15,735,335,495,575,655, 175,255,95]
var timer = 0;
var time = 0;
var divisionHeight=300;
var score =0;
var scoreX = 0;
var modulusTime = time%3;
var text1,  text2,  text3,  text4,  text5,  text6,  text7,  text8, text9, text10;
var turns = 0;
var turnsLeft = 5-turns;
var gameState = "Playing"
// var text1x, text2x, text3x, text4x, text5x, text6x, text7x, text8x, text9x, text10x;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    // console.log(turnsLeft);
    



    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  if(frameCount%22 === 0){
    time++;
    // console.log(time);
    }
    textSize(15);
    text("Every 3 counts, click to spawn a particle: " + time, 485,30);


    text1 = text("5 Points", xPosText[0], 790);
    text2 = text("3 Points", xPosText[1], 790);
    text3 = text("3 Points", xPosText[2], 790);
    text4 = text("2 Points", xPosText[3], 790);
    text5 = text("2 Points", xPosText[4], 790);
    text6 = text("2 Points", xPosText[5], 790);
    text7 = text("1 Point", xPosText[6], 790);
    text8 = text("1 Point", xPosText[7], 790);
    text9 = text("1 Point", xPosText[8], 790);
    text10 = text("1 Point", xPosText[9], 790);
    // console.log(xPosText[0] - 15);
    // console.log(xPosText[0] + 65);

    // if (particles[0].x > xPosText - 15 && Particle.x)
  
      if (particles[0].position.x > xPosText[0] - 15 && particles[0].position.x < xPosText[0] + 65){
      console.log("score");
    }
    if (particles[1].position.x > xPosText[0] - 15 && particles[1].position.x < xPosText[0] + 65){
      console.log("score");
    }
    if (particles[2].position.x > xPosText[0] - 15 && particles[2].position.x < xPosText[0] + 65){
      console.log("score");
    }
    if (particles[3].position.x > xPosText[0] - 15 && particles[3].position.x < xPosText[0] + 65){
      console.log("score");
    }
    if (particles[4].position.x > xPosText[0] - 15 && particles[4].position.x < xPosText[0] + 65){
      console.log("score");
    }



    var particleLength = 5-particles.length;
    if(particleLength<0){
      particleLength = 0;
    }
    turns = text("Turns left: " + particleLength, 20,30)

    // text1x = 415
    // text2x = 15
    // text3x = 735
    // text4x = 335
    // text5x = 495
    // text6x = 95
    // text7x = 575
    // text8x = 655
    // text9x = 175
    // text10x = 255
    if (particles.length >= 5){
      gameState = "end"
    }
    if (gameState === "end"){
      textSize(35);
      text("GAME OVER", width / 2-85, 460);
    }
    console.log(5-particles.length);
}

function mouseDragged(){
  // console.log("drag");
  // console.log(mouseX);

  




}

function mouseReleased(){
  if(time%3 === 0 && gameState === "Playing"){
    // console.log("release");
    particles.push(new Particle(mouseX, 10,10));
    // console.log(particles);
    turns = turns+1;
    console.log(particles);
   



  }



}
