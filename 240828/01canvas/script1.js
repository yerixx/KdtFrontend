const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// //1. 이미지가 꼭 객체화 되어있어야 하고
// const img = new Image();

// //3-1
// // img.addEventListener("load", () => {
// //   ctx.drawImage(img, 0, 0);
// // });

// //3-2
// img.onload = function () {
//   ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
// };

// //2. 경로값 저장되어야 하고
// img.src = "./img/cat.jpg";

const img = new Image();

img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = "./img/bird.jpg";

ctx.beginPath();
ctx.arc(580, 350, 150, 0, Math.PI * 2, false);
ctx.clip();
