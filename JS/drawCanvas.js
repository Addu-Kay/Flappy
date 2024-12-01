import ctx from "./canvas.js";

let windowWidth = window.innerWidth;
let pipeCount = 4;
let dy = 0;
let isJumpClicked = false;

function animatePipe() {
  for (let i = 0; i <= pipeCount; i++) {
    // upper pipes
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(windowWidth + i * 200, 0, 30, 300);
    // ctx.fillRect()

    // lower pipes
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(windowWidth + i * 200, window.innerHeight - 300, 30, 300);
  }
  windowWidth -= 3;
  pipeCount += 1;
}

function jump() {
  if (dy < 20) {
    playerY -= dy;
    ctx.beginPath();
    ctx.arc(window.innerWidth / 2, playerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    dy += 2;
  } else {
    setTimeout(() => {
      animatePlayer();
    }, 50);
    dy = 0;
    isJumpClicked = false;
  }
}

function update() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight, Math.PI * 2);
  animatePipe();
  if (isJumpClicked) {
    jump();
  } else {
    animatePlayer();
  }
  detectCollision();
  requestAnimationFrame(update);
}

function negateJump() {
  isJumpClicked = !isJumpClicked;
}

function detectCollision() {
  const playerX = window.innerWidth / 2;
  console.log(`Player Position ${playerX}, ${playerY}`);
}

function renderPipe() {
  ctx.beginPath();
  ctx.fillStyle = "green";
  const pipeX = window.innerWidth / 2 + 15;
  ctx.fillRect(pipeX, 0, 30, 345);
}

let playerY = window.innerHeight / 2 - 7;

function animatePlayer() {
  const playerX = window.innerWidth / 2;
  ctx.beginPath();
  ctx.arc(playerX, playerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "yellow";
  ctx.fill();
  ctx.stroke();
  // testing
  // playerY += dy;
  // dy += 0.5;
}

export { negateJump, update, animatePlayer, renderPipe };
