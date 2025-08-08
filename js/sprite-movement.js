
  function doSpriteMovement(){
  // FALLING
  playerAnimation.y = playerAnimation.y + 3;
  card2Animation.y = card2Animation.y + 10;
  cardAnimation.x = cardAnimation.x + 8;
  card3Animation.x = card3Animation.x + 3;
  card4Animation.y = card4Animation.y + 5;
 
  
  // LOOPING
  if(playerAnimation.x > 420){playerAnimation.x = -20;}
  if(playerAnimation.x < -20){playerAnimation.x = 420;}
  if(playerAnimation.y > 420){playerAnimation.y = -20;}
  if(playerAnimation.y < -20){playerAnimation.y = 420;}
  
  // rock1 location
  if(cardAnimation.x > 410){cardAnimation.x = -10;}
  if(cardAnimation.x < -10){cardAnimation.x = 410;}
  if(cardAnimation.y > 410){cardAnimation.y = -10;}
  if(cardAnimation.y < -10){cardAnimation.y = 410;}
  
  // rock2 location
  if(card2Animation.y > 410){card2Animation.y = -10;}
  if(card2Animation.y < -10){card2Animation.y = 410;}
  if(card2Animation.x < -10){card2Animation.x = 410;}
  if(card2Animation.x > 410){card2Animation.x = -10;}
  
  // rock3 location
  if(card3Animation.x > 410){card3Animation.x = -10;}
  if(card3Animation.x < -10){card3Animation.x = 410;}
  if(card3Animation.y > 410){card3Animation.y = -10;}
  if(card3Animation.y < -10){card3Animation.y = 410;}
  
  // rock4 location
  if(card4Animation.y > 410){card4Animation.y = -10;}
  if(card4Animation.y < -10){card4Animation.y = 410;}
  if(card4Animation.x < -10){card4Animation.x = 410;}
  if(card4Animation.x > 410){card4Animation.x = -10;}
  

  }
  
