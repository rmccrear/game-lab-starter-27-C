
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  player = createSprite(200, 200, 50, 50);
  player.addAnimation('fly', alienAnimation);
  player.height = 50;
  player.width = 50;

  star = createSprite(100, 100, 50, 50);
  star.shapeColor = "aqua";
  // star.addAnimation('twinkle', starAnimation);
  // star.velocityX = -1;
  // star.velocityY = -2;
  // star.height = 30;
  // star.width = 30;

  platform1 = createSprite(randomNumber(50,300),0, 20, 75);
  platform1.addAnimation('platform.png');

  platform2 = createSprite(randomNumber(50,300),0, 20, 75);
  platform2.addAnimation('platform.png');
}