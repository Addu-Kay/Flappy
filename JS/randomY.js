import { canvasHeight } from "./canvas.js"
import { gap } from "./script.js"

// 200 - 400

export default function randomY() {
  const start = 200
  const end = canvasHeight - (gap + 200)
  return Math.floor((Math.random() * (end - start)) + start)
}
