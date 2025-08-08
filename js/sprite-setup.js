function setupSprites() {
    // create player, target, and obstacles
    var player = createSprite(200, 100);
    player.setAnimation("kid_34_excited_1");
    player.scale = 0.2;

    var coin = createSprite(364, 19);
    coin.setAnimation("coin");

    var card = createSprite(6, 140);
    card.setAnimation("cardClubsQ_1");
    card.scale = 0.3;

    var card2 = createSprite(297, 6);
    card2.setAnimation("cardClubs3_1");
    card2.scale = 0.2;

    var card3 = createSprite(200, 200);
    card3.setAnimation("cardClubsA_1");
    card3.scale = 0.3;

    var card4 = createSprite(200, 200);
    card4.setAnimation("cardClubs10_1");
    card4.scale = 0.3;

    var platform1 = createSprite(200, 200);
    platform1.setAnimation("cardClubs10_1");
    platform1.scale = 0.3;

    var platform2 = createSprite(200, 200);
    platform2.setAnimation("cardClubs10_1");
    platform2.scale = 0.3;

}