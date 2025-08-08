
function respondToUser() {
    if (keyDown("UP_ARROW")) {
        player.velocityY =  0.5;

    }
    // change the y velocity when the user clicks "down"
    if (keyDown("DOWN_ARROW")) {
        player.velocityY =  + 0.5;

    }

    // decrease the x velocity when user clicks "left"
    if (keyDown("LEFT_ARROW")) {
        player.velocityX = p- 0.5;
    }

    // increase the x velocity when the user clicks "right"
    if (keyDown("RIGHT_ARROW")) {
        player.velocityX = + 0.5;
    }
}
