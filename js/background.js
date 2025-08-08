
function drawBackground() {
    background1();
    if (score < 10) {
        background1();
    } 
    if (score >10) {
        background2();
    }
}
function background1() {
    background(0, 0, 139);
    noStroke();
    fill(255, 255, 0);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 3, 3);
    ellipse(340, 50, 60, 60);
    fill(0, 0, 139);
    ellipse(320, 30, 60, 60);
}

function background2() {
    background(191, 0, 255);
    noStroke();
    fill(255, 255, 0);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    ellipse(randomNumber(0, 400), randomNumber(0, 400), 6, 6);
    fill(191, 0, 255)
    ellipse(340, 50, 60, 60);
}