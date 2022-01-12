
function preload(){
  mySound = loadSound('ppe.mp3');

}
function setup(){  
    createCanvas(900,400);

time = 0;
  sprite2=createSprite(150,200,0,0);
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
  coincollect = 6;
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
             sprite.y =200;
              coincollect=6;
           time=0;
           sprite.x=50
           score=0
            sprite2.x=random(600, 800);
                 sprite2.y=random(100,290);
               }
  
    background("blue");
  
    
    
          


   
    
   
 if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
         if (score>20){if (score<40) {coincollect=coincollect+.625}}
         if (score>40){if (score<60){coincollect=coincollect+.3125}}
         if (score>40){if (score<60){coincollect=coincollect+.15625}}
   coincollect=coincollect+.25;
             score = score+1;
 sprite2.x=random(400,900);
      sprite2.y=random(20,370); }
    fill("yellow");
                
 


      text('Score',400,300 );
   fill("red");
    
   text(score,450,342 );
    fill("red");
    
 



drawSprites();
  
  }
 









  
