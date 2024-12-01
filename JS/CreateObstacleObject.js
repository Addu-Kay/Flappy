import ctx from "./canvas.js"

export default function CreateObstacleObject(x, y, width, height, color) {
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.color = color
  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

