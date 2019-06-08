/* 
    Equipe: 
        Filipe Gregório de Farias e Silva - Subturma D (Líder) 
        Ivamar Dantas Roque - Subturma D 
        Etapa 2
        Jogo em Estilo Plataforma
*/
var x = 95
var y = 535
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
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  fill(145,87,35);
  rect (650,490,50,68);
  fill (255);
  ellipse (x,y,38,38);
  fill(0);
  ellipse(x, y, 30, 30);
  if(x == 0|| y == 600 || x == 800 || y == 0)
  {
    x = 95
    y = 535
  }
