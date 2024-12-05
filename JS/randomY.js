import { canvasHeight } from "./canvas.js"
import { gap } from "./script.js"

// 200 - 400

export default function randomY() {
  const start = 50
  const end = canvasHeight - (gap + start)
  return Math.floor((Math.random() * (end - start)) + start)
}
