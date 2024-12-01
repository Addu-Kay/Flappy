import animatePlayer from "./animatePlayer.js"

export default function jump(player) {
  if (player.acceleraion < 20) {
    player.draw()
    player.y -= player.acceleraion
    player.acceleraion += 2;
  } else {
    setTimeout(() => {
      animatePlayer(player);
    }, 50);
    player.acceleraion = 0;
    player.canJump = false;
  }
}
