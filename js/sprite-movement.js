
function doSpriteMovement() {
  // FALLING
  player1.velocityY =1;
  card2.velocityY =3;
  card.velocityX=3;
  card3.velocityX=3;
  card4.velocityY=3

  platform1.velocityY = 2;
  platform2.velocityY = 2;




  // LOOPING
  if (player1.x > 420) { player1.x = -20; }
  if (player1.x < -20) { player1.x = 420; }
  if (player1.y > 420) { player1.y = -20; }
  if (player1.y < -20) { player1.y = 420; }

  // rock1 location
  if (card.x > 410) { card.x = -10; }
  if (card.x < -10) { card.x = 410; }
  if (card.y > 410) { card.y = -10; }
  if (card.y < -10) { card.y = 410; }

  // rock2 location
  if (card2.y > 410) { card2.y = -10; }
  if (card2.y < -10) { card2.y = 410; }
  if (card2.x < -10) { card2.x = 410; }
  if (card2.x > 410) { card2.x = -10; }

  // rock3 location
  if (card3.x > 410) { card3.x = -10; }
  if (card3.x < -10) { card3.x = 410; }
  if (card3.y > 410) { card3.y = -10; }
  if (card3.y < -10) { card3.y = 410; }

  // rock4 location
  if (card4.y > 410) { card4.y = -10; }
  if (card4.y < -10) { card4.y = 410; }
  if (card4.x < -10) { card4.x = 410; }
  if (card4.x > 410) { card4.x = -10; }
}

