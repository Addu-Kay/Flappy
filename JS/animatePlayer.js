import { canvasHeight } from "./canvas.js"
export default function animatePlayer(player) {
  player.draw()
  player.y += player.acceleration
  player.acceleration += 0.5
  if (player.y >= canvasHeight) {
    player.isCollided = true
  }
}
