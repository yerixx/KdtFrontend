const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// const lineCap = ["butt", "round", "square"];

// for (let i = 0; i < lineCap.length; i++) {
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.lineWidth = 15;
// ctx.lineCap = lineCap[i]
//   ctx.stroke();
// }

const lineJoin = ["bevel", "miter", "round"];

for (let i = 0; i < lineJoin.length; i++) {
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.stroke();
}
