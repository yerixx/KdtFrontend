const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#aaa";
ctx.fillRect(100, 50, 100, 100);

//기본값
// ctx.globalCompositeOperation = "source-over";
//겹쳐진부분만 보이게
// ctx.globalCompositeOperation = "source-in";
// ctx.globalCompositeOperation = "source-out";
// ctx.globalCompositeOperation = "source-atop";

//기본값
// ctx.globalCompositeOperation = "destination-over";
//겹쳐진부분만 보이게
// ctx.globalCompositeOperation = "destination-in";
// ctx.globalCompositeOperation = "destination-out";
// ctx.globalCompositeOperation = "destination-atop";

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(100, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
