window.onload = function () {
  let ranNum = Math.cell(Math.random() * 5);
  console.log(ranNum);
  document.body.style.backgroundImage = `url('./img/bg-${ranNum}.jpg')`;
};

// window.onload = function () {
//   let ranNum = Math.floor(Math.random() * 5) + 1;
//   console.log(ranNum);
//   document.body.style.backgroundImage = `url('./img/bg-${ranNum}.jpg')`;
// };
