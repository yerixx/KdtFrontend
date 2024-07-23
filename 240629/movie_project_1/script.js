// const items = document.querySelectorAll("#slide > span");

// items.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     item.style.transform = "translateY(-20px)";
//     item.style.transition = "all 0.3s";
//   });
//   item.addEventListener("mouseout", () => {
//     item.style.transform = "translateY(0)";
//   });
// });

//1.컴퓨터에게 상단 nav ul & li 태그를 인지시켜줘야 한다
// 2. 상단 nav요소에 마우스를 오버하면 이벤트가 실행된다
// 2-1 마우스 오버시 active 가상 클래스가 실행된다 [텍스트 화이트]
// 2-2 하단 lnb 요소의 opacity value값이 1이 되어야 한다
// 3. mouseleave||mouseout 기능을 활용해 마우스가 옆에 있는 li태그로 이동하면 기존 이벤트는 제거가 되고 || 신규 이벤트가 2번기능을 그대로 구현해야한다

const gnbLi = document.querySelectorAll(".navigation_gnb > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});
