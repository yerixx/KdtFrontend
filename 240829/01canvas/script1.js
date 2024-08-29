const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "#999";
// ctx.fillRect(150, 150, 100, 100);

// // //원점 변경
// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);

ctx.fillStyle = "#999";
ctx.fillRect(50, 50, 100, 50);

ctx.save();
//scale 배율, 위치와 사이즈에 영향을 미침
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
ctx.restore();

ctx.strokeRect(200, 50, 100, 50);
