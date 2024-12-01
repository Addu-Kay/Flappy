import ctx from "./canvas.js"

export default function CreatePlayerObject(x, y, radius, color) {
  this.x = x
  this.y = y
  this.radius = radius
  this.acceleration = 0.5
  this.color = color
  this.canJump = false
  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }

}
