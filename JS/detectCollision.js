import clamp from "./clamp.js"
export default function detectCollision(player, obstacle) {
  const obstacleX = clamp(obstacle.x, obstacle.x + obstacle.width, player.x)
  const obstacleY = clamp(obstacle.y, obstacle.y + obstacle.height, player.y)
  const x = Math.pow(obstacleX - player.x, 2)
  const y = Math.pow(obstacleY - player.y, 2)
  const distance = Math.sqrt(x + y) - player.radius
  return distance
}
