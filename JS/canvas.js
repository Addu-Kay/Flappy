const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth / 3;
canvas.width = 400;
canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

export default ctx;
export const canvasWidth = canvas.width
export const canvasHeight = canvas.height
