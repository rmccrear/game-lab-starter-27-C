
function doSpriteInteraction() {
    // SPRITE INTERACTIONS
    // reset the coin when the player touches it
    if (playerAnimation.isTouching(coinAnimation)) {
        coinAnimation.x = randomNumber(20, 380);
        coinAnimation.y = randomNumber(20, 380);
        score = score + 1;
    }
    // make the obstacles disappear and decrease score if player touches it
    if (playerAnimation.isTouching(cardAnimation)) {
        cardAnimation.visibility = false;
        score = score - 1;
    }
    if (playerAnimation.isTouching(card2Animation)) {
        card2Animation.visibility = false;
        score = score - 1;
    }
    if (playerAnimation.isTouching(card3Animation)) {
        card3Animation.visibility = false;
        score = score - 1;
    }
    if (playerAnimation.isTouching(card4Animation)) {
        card4Animation.visibility = false;
        score = score - 1;
    }
    // make the obstacles push the player
    if (playerAnimation.isTouching(platform1Animation)) {
        platform1Animation.displace("player");
    }
    if (playerAnimation.isTouching(platform2Animation)) {
        platform2Animation.displace("player");
    }
}