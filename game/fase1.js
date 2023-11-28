var fase1Completa = false;

if (iniciarFase1) {
  player.x = 300;
  player.y = 750;
}

function playerMovement() {
  console.log("x: " + player.x + "\n y: " + player.y);
  player.shapeColor = "black";
  if (keyDown("up")) {
    player.y -= 10;
  }
  if (keyDown("down")) {
    player.y += 10;
  }
  if (keyDown("right")) {
    player.x += 10;
  }
  if (keyDown("left")) {
    player.x -= 10;
  }
}

function fase1() {
  playerMovement();
  background("white");
  background(fase1bg);

  //criar colisoes e deixar invisivel
  player.collide(block1);
  block1.visible = false;

  if (keyDown("space") && !fase1Completa) {
    console.log("fase 1 completa");
    fase1Completa = true;
    player.x = 50;
    player.y = 100;
  }

  drawSprites();
}
