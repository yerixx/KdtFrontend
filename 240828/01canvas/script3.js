const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// //각각의 중단점 지정
// linGrad.addColorStop(0, "black");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 16;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fillStyle = radGrad;
ctx.fill();

// const img = new Image();

// img.src = "./img/pattern.png";

// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0,0,200,200);
// };
