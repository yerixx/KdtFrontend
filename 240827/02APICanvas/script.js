// const canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = "rgb(0,0,0)";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillstyle = "rgb(0,0,200)";
// ctx.fillRect = (50, 50, 120, 100);

// ctx.clearRect = (70, 80, 80, 45const canvas = document.querySelector("canvas");
// canvas.width = window.innerWidth / 1.1;
// canvas.height = window.innerHeight / 1.1;
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = "rgb(0,0,0)";
// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);
// ctx.fillStyle = "rgb(0,0,200)";
// ctx.fillRect(50, 50, 120, 100);
// ctx.clearRect(70, 80, 80, 45););

// console.log(ctx);

//canvas API 는 호도법을 사용함

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth / 1.1;
canvas.height = window.innerHeight / 1.1;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";
ctx.strokeStyle = "rgb(0,0,0)";
ctx.fillRect(10, 10, 200, 100);
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "rgb(0,0,200)";
ctx.fillRect(50, 50, 120, 100);
ctx.clearRect(70, 80, 80, 45);
