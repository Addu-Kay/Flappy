import { canvasHeight, canvasWidth } from "./canvas.js";
import { gap } from "./script.js";
import { highScoreText, scoreText } from "./update.js";
export default function reset(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  firstUpperPipe.x = canvasWidth
  firstUpperPipe.y = 0
  firstUpperPipe.height = 200

  firstLowerPipe.x = canvasWidth
  firstLowerPipe.y = firstUpperPipe.height + gap
  firstLowerPipe.height = canvasHeight - firstUpperPipe.height + gap

  secondUpperPipe.x = null
  secondUpperPipe.y = 0
  secondUpperPipe.height = 200

  secondLowerPipe.x = null
  secondLowerPipe.y = firstUpperPipe.height + gap
  secondLowerPipe.height = canvasHeight - firstUpperPipe.height + gap
  player.x = canvasWidth / 2
  player.y = canvasHeight / 2
  player.isCollided = false
  player.canJump = false
  player.acceleration = 0.5
  scoreText.text = "0"
  highScoreText.text = `High Score ${localStorage.getItem("highScore") || "0"}`
}
