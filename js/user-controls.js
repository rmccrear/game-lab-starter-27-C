
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
        playerAnimation.velocityX = - 0.5;
        playerAnimation.velocityX = playerAnimation.velocityX- 0.5;
 
    }

    // increase the x velocity when the user clicks "right"
    if (keyDown("RIGHT_ARROW")) {
        playerAnimation.velocityX = + 0.5;
    }
        if (keyDown("UP_ARROW")) {
                playerAnimation.velocityY = 0.5;

        }
        // change the y velocity when the user clicks "down"
        if (keyDown("DOWN_ARROW")) {
                playerAnimation.velocityY = + 0.5;
                1
        }

        // decrease the x velocity when user clicks "left"
        if (keyDown("LEFT_ARROW")) {
                playerAnimation.velocityX = - 0.5;
        }
        // increase the x velocity when the user clicks "right"
        if (keyDown("RIGHT_ARROW")) {
                playerAnimation.velocityX = + 0.5;
        }
}
