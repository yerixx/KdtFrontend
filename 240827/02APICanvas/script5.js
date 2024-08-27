const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//face
ctx.scale(1, 0.7);

ctx.beginPath();
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "green";
ctx.fill();

//eye
ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

//circle
ctx.beginPath();
ctx.arc(120, 80, 10, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 10, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = " black";
ctx.fill();

//mouse
ctx.beginPath();
ctx.arc(150, 150, 30, 0, Math.PI * 2, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 160, 15, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
