import animetePlayer from "./animatePlayer.js";
import ctx, { canvasHeight, canvasWidth } from "./canvas.js";
import CreateTextObject from "./CreateTextObject.js";
import jump from "./jump.js";
import renderPipe from "./renderPipe.js";
let animationId = null
export const scoreText = new CreateTextObject("30px Arial", "0", "30", "30")

const gameOverText = new CreateTextObject("20px Arial", "Game Over, Press Enter to restart", canvasWidth / 2, canvasHeight / 2)
const jumpAudio = new Audio("../sfx/flap-101soundboards.mp3")
const gamveOverAudio = new Audio("../sfx/die-101soundboards.mp3")
const pointAudio = new Audio("../sfx/point-101soundboards.mp3")
const highScore = localStorage.getItem("highScore") || "0"

export const highScoreText = new CreateTextObject("20px Arial", `High Score: ${highScore}`, canvasWidth / 2, 30)

export default function update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  renderPipe(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe)
  scoreText.draw()
  highScoreText.y = 30
  highScoreText.draw()
  if (player.canJump) {
    jumpAudio.play()
    jump(player);
  } else {
    animetePlayer(player);
  }

  if (firstUpperPipe.x + firstUpperPipe.width == player.x - player.radius - 2 ||
    secondUpperPipe.x + secondUpperPipe.width == player.x - player.radius - 2) {
    scoreText.text = Number(scoreText.text) + 1
    const highScore = localStorage.getItem("highScore")
    const currentScore = Number(scoreText.text)
    if (highScore == null || Number(currentScore) > Number(highScore)) {
      localStorage.setItem("highScore", currentScore)
      highScoreText.text = `High Score ${localStorage.getItem("highScore")}`
    }
    pointAudio.play()
  }


  if (player.isCollided) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    gamveOverAudio.play()
    gameOverText.draw()
    highScoreText.y = gameOverText.y + 30
    highScoreText.draw()
    cancelAnimationFrame(animationId)
  } else {
    animationId = requestAnimationFrame(() => {
      update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe);
    });
  }
}
