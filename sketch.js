
function preload(){
  mySound = loadSound('ppe.mp3');

}
function setup(){  
    createCanvas(900,900);
  time = 0;
  sprite2=createSprite(850,200,0,0);
img=loadImage("e.png")
sprite2.addImage(img);
sprite2.scale=0.5
 sprite = createSprite(10, 200,0,0);
img=loadImage("s.png")
sprite.addImage(img);
  group = createGroup();
group.add(sprite);
  score = 0 ;
  pause = 0;
  pause2 = .5; 
  coincollect = 10;
  time2 = 0;
}
function draw() {
 if (sprite.x===sprite.x) {
    sprite.y = mouseY;
    
    sprite.x = sprite.x+coincollect;
  }
 time=time+1
  textSize(40);
  sprite.scale=.50;
   if (sprite.x>900){
             sprite.y=200;
              coincollect=10;
           time=0;
           sprite.x=50
           score=0
           sprite2.y=random(100,870);
               }
   background("blue");
  if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=50;
         if (coincollect>40){coincollect=20}
          coincollect=coincollect+.5;
             score = score+1;
      sprite2.x=850;
      sprite2.y=random(20,870); }
    fill("yellow");
   text('Score',400,300 );
   fill("red");
   text(score,450,342 );
    fill("red");
    drawSprites(); 
  }
