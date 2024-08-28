const toolbar = document.querySelector("#toolbar");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;
const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;
let startX;
let startY;
let lineWidth = 2;
let isDrawing = false;

toolbar.addEventListener("change", (e) => {
  console.log(e);
  if (e.target.id === "stroke") ctx.strokeStyle = e.target.value;
  if (e.target.id === "lwidth") lineWidth = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.linwCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

toolbar.querySelector("#reset").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
