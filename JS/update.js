import animetePlayer from "./animatePlayer.js";
import ctx, { canvasHeight, canvasWidth } from "./canvas.js";
import jump from "./jump.js";
import renderPipe from "./renderPipe.js";

export default function update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  renderPipe(firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe)
  if (player.canJump) {
    jump(player);
  } else {
    animetePlayer(player);
  }
  requestAnimationFrame(() => {
    update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe);
  });
}
