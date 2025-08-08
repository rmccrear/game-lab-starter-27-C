
function respondToUser() {
    if (keyDown("UP_ARROW")) {
        playerAnimation.velocityY = 0.5;

    }
    // change the y velocity when the user clicks "down"
    if (keyDown("DOWN_ARROW")) {
        playerAnimation.velocityY = + 0.5;

    }

    // decrease the x velocity when user clicks "left"
    if (keyDown("LEFT_ARROW")) {
<<<<<<< HEAD
        playerAnimation.velocityX = - 0.5;
=======
        player.velocityX = player.velocityX- 0.5;
>>>>>>> 7b9f595f117b7dbf28ccca387becb8d0442b7761
    }

    // increase the x velocity when the user clicks "right"
    if (keyDown("RIGHT_ARROW")) {
        playerAnimation.velocityX = + 0.5;
    }
}
