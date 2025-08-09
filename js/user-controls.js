
function respondToUser() {
        if (keyDown("UP_ARROW")) {
                player1.velocityY = -5;

        }
        // change the y velocity when the user clicks "down"
        if (keyDown("DOWN_ARROW")) {
                player1.velocityY = 2;
                
        }

        // decrease the x velocity when user clicks "left"
        if (keyDown("LEFT_ARROW")) {
                player1.velocityX = -2;
        }
        // increase the x velocity when the user clicks "right"
        if (keyDown("RIGHT_ARROW")) {
                player1.velocityX = 2;
        }
}
