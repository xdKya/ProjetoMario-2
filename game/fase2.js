var fase2Completa = false;

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

function fase2() {
  playerMovement();
  background("hotpink");
  player.shapeColor = "blue";

  if (keyDown("a") && !fase2Completa) {
    console.log("fase 2 completa");
    fase2Completa = true;
    player.x = 400;
    player.y = 400;
  }

  drawSprites();
}
