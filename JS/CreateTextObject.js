import ctx from "./canvas.js"

export default function CreateTextObject(fontStyle, text, x, y) {
  this.fontStyle = fontStyle
  this.text = text
  this.x = x
  this.y = y
  this.draw = function() {
    ctx.font = this.fontStyle
    ctx.fillStyle = "black"
    ctx.textAlign = "center"
    ctx.fillText(this.text, this.x, this.y)
  }
}
