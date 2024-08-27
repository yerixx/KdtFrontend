const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//사각형 형태의 도형을 만들 때에는
// 속성 정의 먼저 (*색상,외곽선 => 도형 그림)

// 삼각형 형태의 도형을 만들 때에는
//정의할 속성이 없어서 도형 드로잉 선언을 해야함

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.closePath()
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.fillStyle = "rgb(0,200,0)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = "rgb(0,200,0)";
ctx.fill();
