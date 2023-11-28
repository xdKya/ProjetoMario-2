var fase4Completa = false;

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

function fase4() {
  playerMovement();
  background("purple");

  if (keyDown("c") && !fase4Completa) {
    console.log("fase 4 completa");
    fase4Completa = true;
  }

  drawSprites();
}
