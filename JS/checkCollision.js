import detectCollision from "./detectCollision.js"

export default function checkCollision(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  const distance1 = detectCollision(player, firstUpperPipe)
  const distance2 = detectCollision(player, firstLowerPipe)
  const distance3 = detectCollision(player, secondUpperPipe)
  const distance4 = detectCollision(player, secondLowerPipe)
  if (distance1 <= 0) {
    player.isCollided = true
  } else if (distance2 <= 0) {
    player.isCollided = true
  } else if (distance3 <= 0) {
    player.isCollided = true
  } else if (distance4 <= 0) {
    player.isCollided = true
  }

}
