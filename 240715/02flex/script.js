window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  // console.log(scroll);
  // 가급적 전역변수를 많이 안만드는게 좋음
  // 웹브라우저가 코드를 읽는데 딜레이 시킴
  const header = document.querySelector("header");

  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
