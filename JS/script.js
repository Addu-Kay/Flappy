import CreateTextObject from "./CreateTextObject.js"
import CreatePlayerObject from "./CreatePlayerObject.js";
import CreateObstcaleOjbect from "./CreateObstacleObject.js";
import { canvasWidth, canvasHeight } from "./canvas.js";
import update from "./update.js";
import reset from "./reset.js";

export const gap = 190

const player = new CreatePlayerObject(
  canvasWidth / 2,
  canvasHeight / 2,
  20,
  "yellow"
);

const firstUpperPipe = new CreateObstcaleOjbect(canvasWidth, 0, 80, 200, "green");
const firstLowerPipe = new CreateObstcaleOjbect(canvasWidth,
  firstUpperPipe.height + gap, 80, canvasHeight - firstUpperPipe.height + gap, "green");
const secondUpperPipe = new CreateObstcaleOjbect(null, 0, 80, 200, "green");
const secondLowerPipe = new CreateObstcaleOjbect(null,
  firstUpperPipe.height + gap, 80, canvasHeight - firstUpperPipe.height + gap, "green");
const startGame = new CreateTextObject("30px Arial", "Press Enter to start", canvasWidth / 2, canvasHeight / 2)

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (!player.isCollided) {
      player.acceleration = 0;
      player.canJump = true;
    }
  } else if (event.code === "Enter") {
    reset(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe)
    update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe);
  }
});

startGame.draw()
