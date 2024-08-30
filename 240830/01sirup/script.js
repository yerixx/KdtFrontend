const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const human = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  //절반을 기준으로!
  // console.log(e.pageX - window.innerWidth / 2);
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  //움직임의 30%만 따라오게
  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 10}px)`;
  human.style.transform = `translateX(${targetX / -20}px)`;
  textImg.style.transform = `translateX(${targetX / 6}px)`;

  window.requestAnimationFrame(loop);
};

loop();
