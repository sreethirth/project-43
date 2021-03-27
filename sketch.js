var hour,minute,second;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  translate(350,300)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  hrAngle = map(hr, 0, 23, 0, 360)
  mnAngle = map(mn, 0, 59, 0, 360)
  scAngle = map(sc, 0, 59, 0, 360)

  // hour hand
  push();
  rotate(hrAngle)
  stroke('yellow')
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();

  //min hand
  push();
  rotate(mnAngle)
  stroke('blue')
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();


  //seconds hand
  push();
  rotate(scAngle)
  stroke('orange')
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();
  
  noFill();
  strokeWeight(10);
  stroke('yellow');
  arc(0,0,260,260,0,hrAngle);
  stroke('blue');
  arc(0,0,280,280,0,mnAngle);
  stroke('orange');
  arc(0,0,300,300,0,scAngle);

  drawSprites();
}

