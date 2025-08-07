
function respondToUser() {
    if (keyDown("UP")) {
        player.velocityY = player.velocityY - 0.5;

    }
    // change the y velocity when the user clicks "down"
    if (keyDown("DOWN")) {
        player.velocityY = player.velocityY + 0.5;

    }

    // decrease the x velocity when user clicks "left"
    if (keyDown("LEFT")) {
        player.velocityX = player.velocityX - 0.5;
    }

    // increase the x velocity when the user clicks "right"
    if (keyDown("RIGHT")) {
        player.velocityX = player.velocityX + 0.5;
    }
}
