import CreatePlayerObject from "./CreatePlayerObject.js";
import CreateObstcaleOjbect from "./CreateObstacleObject.js";
import { canvasWidth, canvasHeight } from "./canvas.js";
import update from "./update.js";

export const gap = 50

const player = new CreatePlayerObject(
  canvasWidth / 2,
  canvasHeight / 2,
  30,
  "yellow"
);

const firstUpperPipe = new CreateObstcaleOjbect(canvasWidth, 0, 80, 200, "tomato");
const firstLowerPipe = new CreateObstcaleOjbect(canvasWidth,
  firstUpperPipe.height + gap, 80, canvasHeight - firstUpperPipe.height + gap, "tomato");
const secondUpperPipe = new CreateObstcaleOjbect(null, 0, 80, 200, "green");
const secondLowerPipe = new CreateObstcaleOjbect(null,
  firstUpperPipe.height + gap, 80, canvasHeight - firstUpperPipe.height + gap, "tomato");

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    player.acceleration = 0;
    player.canJump = true;
  }
});
// update(player, firstUpperPipe, firstLowerPipe, secondUpperPipe, secondLowerPipe);
