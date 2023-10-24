function setup() {
  createCanvas(700, 700);
   noStroke();
    //dark blue
 fill(15, 62, 150);
rect(0, 0, 710, 200);
  //light blue
  fill(93, 140, 227);
rect(0, 90, 710, 200);
  //blue
  fill(247, 155, 69);
rect(0, 200, 710, 200);
  //green
  fill(1, 120, 33);
rect(0, 400, 710, 200);
}

function draw() {
  // outside orange sun
  fill(250, 188, 130);
  circle(370, 200, 100);
  // yellow inside sun
  fill(252, 248, 172);
  arc(370, 200, 100, 10, 5, PI + QUARTER_PI, OPEN);
 /// tree trunk
  fill(79, 62, 33);
    rect(10,300, 120, 300);
 // green branch
  fill(70, 130, 87);
  triangle(10, 330, 24,112, 127, 12);
  triangle(50, 430, 123,122, 151, 13);
  triangle(60, 500, 203, 12, 10, 103);
  triangle(90, 540, 230,102, 110, 50);
  triangle(10, 40, 30,102, 100, 20);
  triangle(0, 50, 320,106, 120, 30);  
  triangle(0, 120, 3, 12, 100, 60);
  


}

