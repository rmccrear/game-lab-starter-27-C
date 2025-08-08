function spritesetup() {  
// create player, target, and obstacles
var player = createSprite(200, 100);
player.setAnimation("kid_34_excited_1");
player.scale = 0.2;
var coins = createSprite(364, 19);
coins.setAnimation("coin");
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
card4.height = 0.2;
var card5 = createSprite(200, 200);
card5.setAnimation("cardClubs10_1");
card5.scale = 0.3;
card5.height = 0.2;
}