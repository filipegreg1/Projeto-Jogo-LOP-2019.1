var x = 95, xx = 650, y = 535, yp = 0, t = 0;
var pulo = false;
var pontos = 0;
var lvl = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
 background(227,218,205)
  textSize(20)
  //HUD
  text('Pontuação: '+parseInt(pontos), 10, 30);
  text('Nível: '+lvl, 300, 30);
  pontos+=0.5;
  if(pontos%1000 == 0){
    lvl++;
  }
  //Comando para movimentação
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
  //Comando de pulo
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
  if(xx < 0){
  xx = 800 +random(1000)
  }
}
