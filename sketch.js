var iniciarFase1 = false;
var iniciarFase2 = false;
var iniciarFase3 = false;
var iniciarFase4 = false;
var iniciarFase5 = false;

function preload() {
  fase1bg = loadImage("assets/fase dos dutos/dutos.png");
}

function setup() {
  createCanvas(600, 800);

  start = createButton("Começar");
  start.position(width / 2 + 500, height / 2 + 200);
  start.size(100, 50);

  player = createSprite(300, 750, 50, 50);

  //criar colisores
  block1 = createSprite(300, 790, 600, 30);
}

function draw() {
  if (!iniciarFase1) {
    background("yellow");
  }
  fill("black");
  textAlign(CENTER);
  textSize(50);
  textFont("fantasy");
  text("Modais de Transporte \n O Jogo", width / 2, height / 2);

  start.mousePressed(() => {
    iniciarFase1 = true;
    start.hide();
  });

  if (iniciarFase1) {
    fase1();
  }
  if (fase1Completa) {
    iniciarFase1 = false;
    iniciarFase2 = true;

    if (iniciarFase2) {
      fase2();
    }
  }
  if (fase2Completa) {
    iniciarFase2 = false;
    iniciarFase3 = true;

    if (iniciarFase3) {
      fase3();
    }
  }
  if (fase3Completa) {
    iniciarFase3 = false;
    iniciarFase4 = true;

    if (iniciarFase4) {
      fase4();
    }
  }
  if (fase4Completa) {
    iniciarFase4 = false;
    iniciarFase5 = true;

    if (iniciarFase5) {
      fase5();
    }
  }

  xypos();
}

function xypos() {
  textSize(20);
  text("x: " + mouseX + " Y: " + mouseY, mouseX, mouseY);
}
