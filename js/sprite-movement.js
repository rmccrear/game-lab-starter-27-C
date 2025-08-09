
function doSpriteMovement() {
  // FALLING
  player1.y = player1.y + 3;
  card2.y = card2.y + 10;
  card.x = card.x + 8;
  card3.x = card3.x + 3;
  card4.y = card4.y + 5;

  platform1.y = platform1.y + 2;
  platform2.y = platform2.y + 2;



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

