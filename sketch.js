function preload(){
  mySound = loadSound('ppe.mp3');

}
function setup(){  
    createCanvas(900,400);
  time = 0;
  sprite2=createSprite(450,100,0,0);
img=loadImage("e.png")
sprite2.addImage(img);
sprite2.scale=0.5
  sprite = createSprite(10,100);
img=loadImage("s.png")
sprite.addImage(img);
  group = createGroup();
group.add(sprite);
  score = 0 ;
  pause = 0;
  pause2 = .5; 
  coincollect = 10;
  time2 = 0;
  sprite2.y=random(100,290);
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
              coincollect=10;
           time=0;
           sprite.x=50
           score=0
            sprite2.x=850
                 sprite2.y=random(100,290);
               }
   background("blue");
  if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
         if (coincollect>35){coincollect=20}
         
         
   coincollect=coincollect+.5;
             score = score+1;
 sprite2.x=850
      sprite2.y=random(20,370); }
    fill("yellow");
   text('Score',400,300 );
   fill("red");
   text(sprite.y,450,342 );
    fill("red");
    drawSprites(); 
  }
