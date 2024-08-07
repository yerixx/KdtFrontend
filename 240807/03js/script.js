//텍스트에 마우스가 올라갈 때마다 이미지가 변경된다
//현재 이미지를 출력하고 있는 node를 찾아온다
//해당 node가 어떻게 이미지를 출력하고 있는 백그라운드이미지 속성 확인
//어떻게 하면 node의 속성값을 변경할 . 수있는지 고민한다

//텍스트에서 마우스가 떠나면 원래 상태로 돌아온다

const p = document.querySelectorAll("li");
const bgImg = document.querySelector(".photo");
const ul = document.querySelector("ul");
let imgURL = "";

ul.addEventListener("mouseleave", function () {
  bgImg.innerHTML = `<img src="portrait-initial.jpg">`;
});

// p.forEach((pItem, index) => {
//   pItem.addEventListener("mouseenter", () => {
//     switch (index) {
//       case 0:
//         imgURL = "./img/portrait-01.jpg";
//         break;
//       case 1:
//         imgURL = "./img/portrait-02.jpg";
//         break;
//       case 2:
//         imgURL = "./img/portrait-03.jpg";
//         break;
//       case 3:
//         imgURL = "./img/portrait-04.jpg";
//         break;
//     }
//     bgImg.innerHTML = `<img src="${imgURL}">`;
//   });
// });

p.forEach((pItem, index) => {
  pItem.addEventListener("mouseenter", function () {
    let changeImage = this.getAttribute("data-image");
    console.log(changeImage);
    bgImg.style.backgroundImage = `url("${changeImage}")`;
  });
  pItem.addEventListener("mouseleave", function () {
    bgImg.style.backgroundImage = ``;
  });
});
