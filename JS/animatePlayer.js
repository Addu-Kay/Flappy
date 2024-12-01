export default function animatePlayer(player) {
  player.draw()
  player.y += player.acceleration
  player.acceleration += 0.5
}
