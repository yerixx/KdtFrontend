const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
//true 반시계 방향
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(250, 100, 50, 0, Math.PI, false);
// ctx.arc(120, 100, 50, 0, Math.PI);
// ctx.arc(120, 100, 50, 0, Math.PI*2);
// (Math.PI / 180) * 180) = Math.PI
ctx.closePath();

ctx.fillStyle = "red";
ctx.fill();

//closePath로 닫으면 beginPath로 다시 열어야함
//closePath로 닫으면 위쪽과 단절, 구분됨
ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// closePath를 주면 의도적으로 시작점과 끝을 닫아버림. 안쓰면 호의 형태로 남음
// ctx.closePath();
ctx.strokeStyle = "rgb(0,0,255)";
ctx.stroke();
