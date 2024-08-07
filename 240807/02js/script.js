//별모양 찾아오기 (*폰트어썸 찾아오기) querySelectorAll
//별을 클릭하면 컬러가 변경되게
// 어떤 별을 클릭하던지 간에 무조건 별 안에 색상은 제거 reset 되어야함
//조건문을 사용하여 선택된 별의 개수에 따라 안에 들어가는 이미지 및 문장이 변경되게 innerText

const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");
console.log(print);
stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    stars.forEach((s, i) => {
      // s.classList.remove("active");
      // if (i <= index) {
      //   s.classList.add("active");
      // }
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    let imgURL = "";

    switch (index) {
      case 0:
        message = "별로예요!";
        imgURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "그저그래요";
        imgURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "보통이에요";
        imgURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "맘에들어요";
        imgURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주좋아요";
        imgURL = "./img/star-lv5.png";
        break;
    }
    
    // print.innerText = `${message}`;
    print.innerHTML = `<img src="${imgURL}">${message}`;
  });
});
