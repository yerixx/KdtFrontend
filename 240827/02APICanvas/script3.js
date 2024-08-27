const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.closePath();
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.closePath();
// ctx.fillStyle = "orange";
// ctx.fill();

//무조건 도형이 시작하기 전에 scale 값을 넣어야함
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();

//scale 값은 상속 할 수 있음
ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
