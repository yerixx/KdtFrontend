const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  // 호도법..정승재삼각함수
  const rotation = (degree * Math.PI) / 180;
  // cos = 밑변의 값 가져옴
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  //sin = 높이 값 가져옴
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;
  requestAnimationFrame(loop);
};

loop();
