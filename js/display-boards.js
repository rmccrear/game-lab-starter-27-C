import { Score } from "p5";

function showBoards() {
  showScore ()
}

function showScore() {
    fill(255, 255, 255);
    textSize(16);
    text("Score: ", 10, 20);
    text(score, 20,20);
}