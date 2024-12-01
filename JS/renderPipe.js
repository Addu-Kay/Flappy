import { canvasWidth } from "./canvas.js"
export default function renderPipe(firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  if (firstUpperPipe.x != null) {
    firstUpperPipe.draw()
    firstLowerPipe.draw()
    firstUpperPipe.x -= 1
    firstLowerPipe.x -= 1
  }

  if (secondUpperPipe.x != null) {
    secondUpperPipe.draw()
    secondLowerPipe.draw()
    secondUpperPipe.x -= 1
    secondLowerPipe.x -= 1
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
    secondLowerPipe.x = canvasWidth + 90;
  } else if (secondUpperPipe.x == 200) {
    firstUpperPipe.x = canvasWidth + 90;
    firstLowerPipe.x = canvasWidth + 90;
  }
}
