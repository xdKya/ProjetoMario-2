var fase3Completa = false;

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

function fase3() {
  playerMovement();
  background("orange");

  if (keyDown("b") && !fase3Completa) {
    console.log("fase 3 completa");
    fase3Completa = true;
  }

  drawSprites();
}
