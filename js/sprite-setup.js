function setupSprites() {//player, target, and obstacles
    player1 = createSprite(200, 100);
    player1.addAnimation("kid", player1Ani);
    player1.scale = 0.2;

    card = createSprite(6, 140);
    card.addAnimation("cardClubsQ_1", cardAni);
    card.scale = 0.3;
    card2 = createSprite(297, 6);
    card2.addAnimation("cardClubs3_1", card2Ani);
    card2.scale = 0.2;
    card3 = createSprite(200, 200);
    card3.addAnimation("cardClubsA_1", card3Ani);
    card3.scale = 0.3;
    card4 = createSprite(200, 200);
    card4.addAnimation("cardClubs10_1", card4Ani);
    card4.scale = 0.3;
    card4.height = 0.2;

    platform1 = createSprite(randomNumber(50, 300), 0);
    platform1.addAnimation("platform", platform1Ani);

    platform2 = createSprite(randomNumber(50, 300), 0);
    platform2.addAnimation("platform", platform2Ani);
}