/* 
    Equipe: 
        Filipe Gregório de Farias e Silva - Subturma D (Líder) 
        Ivamar Dantas Roque - Subturma D 
        Todas as etapas
        Jogo em Estilo Plataforma
*/
var x = 95; y = 555; yp = 0; t = 0;
var pulo = false;
var pontos = 0;
var lvl = 1;
var vx = []; vy = []; vdx = [];vtam = []; vtam1 = [];
var qt = 6; 
var vMuroTam = []; vMuroAlt = []; vMuroX = []; 
var VveloX = -5;
var tela = 0;
var imgAndando = []; contFrame = 0; paraFrame = 0;
var anima;
var textoX = 180; contTexto = 0; ContTexto = 0;
function preload(){ //Imagens Etapa 10
  for(i = 0; i <3; i++){
    imgAndando[i] = loadImage("Andre_andando_"+i+".png")
  }
}

function gameover(){ //Tela game over Etapa 9
  clear();
  background(0);
  textSize(32);
  fill(255,255,255);
  text("GAME OVER :'( ",265,300);
  text("Aperte ENTER para recomeçar!", 170, 350);
  if (keyIsDown(ENTER)) {
    pedramuro();
    lvl = 1;
    pontos = 0;
    tela = 0;
  }
}

function pedramuro(){
  for ( i = 0; i < qt; i++) { //Vetor etapa 8
    vx[i] = random(0,800); 
    vy[i] = random (565,575);
    vtam[i] = 4
    vtam1[i] = random(3,10)
  }
  vMuroTam[0] = 35; vMuroTam[1] = 17; vMuroTam[2] = 40; vMuroTam[3] = 15; vMuroTam[4] = 40;
  vMuroAlt[0] = 55; vMuroAlt[1] = 45; vMuroAlt[2] = 40; vMuroAlt[3] = 35; vMuroAlt[4] = 50;
  for(i = 0; i <5; i++){
    vMuroX[i] = random(100*i,800*i*i+300)+1000
  }
}

function setup(){
  createCanvas(800, 600);
  frameRate(60); 
  pedramuro();
}

function draw() {
  if ( tela == 0) {
    clear();
    background (0);
    textSize (32);
    fill (255,255,255);
    ContTexto++;
    if(ContTexto > 5){
      contTexto++;
      ContTexto = 0
    }
    if(contTexto%2 == 0){
      TextoX = 180;
    }
    if(contTexto%2 == 1){
      TextoX = 1000
    }
    text("Aperte ENTER para começar!",TextoX,310);
    if (keyIsDown(ENTER) ) {
      tela = 1;
    }
  }
  if (tela == 1){
    clear();
    background(227,218,205)
    textSize(20)
  //HUD
    text('Pontuação: '+parseInt(pontos), 10, 30); //Etapa 5
    text('Nível: '+lvl, 300, 30);
    pontos+=0.25;
    if(pontos==150){
      lvl++;
      VveloX = -6
    }
    if (pontos == 500){
      VveloX = -6.5;
      lvl++;
    }
    if (pontos == 1000){
      VveloX = -7;
      lvl++;
    }
    for ( i = 0; i < qt; i++) {
    fill(0);
    vx[i] = vx[i] + VveloX; 
    if ( vx[i] < 0 ) {
      vx[i] = 800+random(0,200) //Etapa 3 dentro do vetor
    }
    rect(0,550,800,1);
    rect(vx[i],vy[i],vtam1[i],vtam[i]); //Etapa 7 criação com vetores
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
		// habilita a ocorrência de um novo pulo Etapa 4
		    pulo = false;
		    yp = 0; 		
        }
    }
    fill(145,87,35);
    for(i = 0; i < 5; i++){
      rect(vMuroX[i],570-vMuroAlt[i],vMuroTam[i],vMuroAlt[i])
      vMuroX[i] += VveloX;
      if(vMuroX[i] < 0){
        vMuroX[i] = 1000;
      }
    }
    fill (255);
  // Etapa 10
    anima =  imgAndando[contFrame];
    imageMode(CENTER)
    image(anima,x, y+yp)
    paraFrame++;
    if(paraFrame > 3){
      contFrame++;
      paraFrame = 0
    }
    if(contFrame > 2){
      contFrame = 0;
    }   
    fill(0);
    for(i = 0; i <5; i++){
      if(dist(x,y+yp,vMuroX[i]+vMuroTam[i],570)<30){ //Etapa 6
        tela = 2;
      }
    }
  }
  if (tela == 2){
    gameover();
  }
}