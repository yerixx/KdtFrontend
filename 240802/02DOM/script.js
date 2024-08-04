// const main = document.querySelector("main");
// // const profile = main.querySelector("main > #profile");
// const profile = main.getElementById("profile");
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// // const user = desc.querySelectorAll(".user");
// const img = document.getElementsByClassName("image");
// console.log(img);

//유사배열
//99% 배열이 가지고 있는 속성
//유사배열은 배열과 다른 1%의 속성을 가지고 있음

// user.forEach((item) => {
//   item.addEventListener("click", () => {});
// });

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0];
// console.log(desc.textContent);

const title = document.querySelector("#title");

//node의 값은 받은 변수는 = 객체가 됨
//객체 뒤엔 함수 붙일 수 있음
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
  this.borderRadius = "20px";
});

const img = document.querySelector("#profile img");
console.log(img.src);

img.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");

firstP.addEventListener("click", function () {
  this.innerHTML = `이름 : <b>태연</b>`;
});

const secondP = document.querySelector("#desc > p:nth-child(2)");

secondP.addEventListener("click", function () {
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
