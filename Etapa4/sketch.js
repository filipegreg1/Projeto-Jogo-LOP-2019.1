var x = 95;
var xx = 650;
var y = 535;
var yp = 0;
var t = 0;
var pulo = false
function setup() {
  createCanvas(800, 600);
}

function draw() {
 background(227,218,205)
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
    xx= xx - 10;
  if (xx <= -50) {
    xx = 800;
  }
  if(keyIsDown(UP_ARROW)&& (!pulo)){
  pulo = true
  t = 0
  }
  if(pulo){
  t++;
  yp = 0.5*(t)*(t - 30)
    if (yp > 0) {
		// habilita a ocorrência de um novo pulo 
		pulo = false;
		yp = 0; 		
	}
  }
  fill(145,87,35);
  rect(xx,485,35,68);
  fill (255);
  ellipse (x,y+yp,38,38);
  fill(0);
  ellipse(x, y+yp, 30, 30);
  if(x == 0){
  x = 5
  }
  if(x == 800){
  x = 795
  }
  if(x == xx )
  {
    x= 95
  }
  if(xx < 0){
  xx = 800 +random(1000)
  }
}
