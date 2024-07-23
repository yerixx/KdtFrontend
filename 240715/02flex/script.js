// header nav + gototop
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  // console.log(scroll);
  // 가급적 전역변수를 많이 안만드는게 좋음
  // 웹브라우저가 코드를 읽는데 딜레이 시킴
  const header = document.querySelector("header");
  const goToTop = document.querySelector(".gototop");

  if (scroll > 50) {
    header.classList.add("active");
    goToTop.classList.add("active");
  } else {
    header.classList.remove("active");
    goToTop.classList.remove("active");
  }
});

// trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = document.querySelectorAll("a");
console.log(trigger, gnb, gnbLinks);
// 트리거가 클릭 되면
trigger.addEventListener("click", function () {
  // gnb를 찾아와서
  // 트리거와 gnb에 active 를 줘라
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

// a를 클릭하면 gnb 없어지게 하는 방법
// gnbLinks를 개별적으로 link로 가져오게함
gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

//slick slider
$(".mySlider").slick({
  // dots- pager
  dots: false,
  isFinite: false,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  // 반응형
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

//scrollTo
// gototop을 클릭하면
$(".gototop, .gnb a").click(function () {
  // this요소가 가지고 있는 hash (경로) 를 향해 가라
  // 근데 경로가 지정이 안되어 있으면 0 = 웹 좌표계의 top = 0, 0.8 초 이내로 가라||
  console.log("hi");
  $.scrollTo(this.hash || 0, 800);
});

// 위에 안됨!!!!!
