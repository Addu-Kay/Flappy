import { canvasWidth } from "./canvas.js"
import checkCollision from "./checkCollision.js"
import randomY from "./randomY.js"
import { gap } from "./script.js"

export default function renderPipe(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  if (firstUpperPipe.x != null) {
    firstUpperPipe.draw()
    firstLowerPipe.draw()
  }

  if (secondUpperPipe.x != null) {
    secondUpperPipe.draw()
    secondLowerPipe.draw()
  }

  if (firstUpperPipe.x == -firstUpperPipe.width) {
    firstUpperPipe.x = null
    firstLowerPipe.x = null
  } else if (secondUpperPipe.x == -secondUpperPipe.width) {
    secondUpperPipe.x = null
    secondLowerPipe.x = null
  }

  if (firstUpperPipe.x == 200) {
    secondUpperPipe.x = canvasWidth + 90;
    secondUpperPipe.height = randomY()
    secondLowerPipe.x = canvasWidth + 90;
    secondLowerPipe.y = secondUpperPipe.height + gap
  } else if (secondUpperPipe.x == 200) {
    firstUpperPipe.x = canvasWidth + 90;
    firstUpperPipe.height = randomY()
    firstLowerPipe.x = canvasWidth + 90;
    firstLowerPipe.y = firstUpperPipe.height + gap
  }

  checkCollision(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe)
  if (!player.isCollided) {
    if (firstUpperPipe.x != null) {
      firstUpperPipe.x -= 2
      firstLowerPipe.x -= 2
    }
    if (secondUpperPipe.x != null) {
      secondUpperPipe.x -= 2
      secondLowerPipe.x -= 2

    }
  }
}
