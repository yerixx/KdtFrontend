const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");
//객체 활용
const origin = {
  x: 200,
  y: 200,
};
const alpha = 0.7;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

ctx.fillStyle = "#ccc";
// ctx.fillRect(200, 200, 100, 100);
ctx.fillRect(origin.x, origin.y, 100, 100);

// // //translate 활용 질문하기!!!!
ctx.translate(origin.x, origin.y);

button.addEventListener("click", () => {
  //버튼을 누르는 순간 원점 이동
  //30도씩 회전
  ctx.rotate((Math.PI / 180) * 30);
  ctx.fillStyle = "#f00";
  //원점을 중심으로 회전
  ctx.fillRect(0, 0, 100, 100);
});

// button.addEventListener("click", () => {
//   ctx.translate(origin.x, origin.y);
//   //버튼을 누르는 순간 원점 이동
//   //30도씩 회전
//   ctx.rotate((Math.PI / 180) * 30);
//   ctx.fillStyle = "#f00";
//   //원점을 중심으로 회전
//   ctx.fillRect(0, 0, 100, 100);
//   ctx.translate(-origin.x, -origin.y);
// });

// const randomRGB = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   return `rgb(${red}, ${green}, ${blue})`;
// };

// button.addEventListener("click", () => {
//   let color = randomRGB();

//   ctx.globalAlpha = alpha;
//   //버튼을 누르는 순간 원점 이동
//   //translate 활용
//   ctx.translate(origin.x, origin.y);
//   //30도씩 회전
//   ctx.rotate((Math.PI / 180) * 30);
//   ctx.fillStyle = color;
//   //원점을 중심으로 회전
//   ctx.fillRect(0, 0, 100, 100);
//   ctx.translate(-origin.x, -origin.y);
// });
