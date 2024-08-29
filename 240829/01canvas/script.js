const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //1. save & restore를 활용한 작업
// ctx.fillStyle = "#999";
// ctx.fillRect(10, 10, 100, 100);

// //restore가 오기 전까지 현재까지의 공간으로 저장
// ctx.save();
// //canvas의 위치 이동
// ctx.translate(150, 150);
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// // 전단계의 위치로 복구
// ctx.restore();

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

//moveTo를 활용한 작업
ctx.fillStyle = "#999";
ctx.fillRect(10, 10, 100, 100);

//그때 상황에 맞춰서 움직일 수 있지만 절대적인 위치는 안변함
ctx.moveTo(150, 150);
ctx.fillStyle = "#f00";
ctx.fillRect(160, 160, 100, 100);
ctx.fillStyle = "orange";
ctx.fillRect(50, 50, 80, 20);

ctx.moveTo(10, 10);
ctx.fillStyle = "orange";
ctx.fillRect(200, 200, 80, 20);
