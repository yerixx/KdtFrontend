// scroll event

window.addEventListener("scroll", () => {
  //이벤트 종류,
  const header = document.querySelector("header");
  //스크롤 휠이 움직이면 doc[html] 에서 header 찾아줘
  const nav = document.querySelector("#logo");
  const logo = document.querySelector("nav");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  // console.log(header, nav, gnb);
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");
  console.log(trigger);

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      //변수를 객체로 사용, 변수 안에 변수 콜백 함수
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      /*변수를 객체로 사용, 변수 안에 변수 콜백 함수*/
      bar.classList.remove("active");
    });
  }
});

// toggle event
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
  //toggle 버튼 한번 누르면 on 두번 누르면 off
});

//searchbar trigger
//1. 사용자가 검색 버튼을 클릭
// 컴퓨터는 DOM을 활용해서 검색버튼을 인지.
// 검색 버튼이 클릭되었는지에 대한 여부를 이벤트 처리를 통해 실행

//2. 검색버튼을 한번 클릭하면 오른쪽에 있던 search bar 출력
// 미리 사전에 CSS를 통해 정의한 가상클래스를 호출한다

//3. 두번 클릭하면 현 위치에 있던 search bar 가 다시 오른쪽으로!
// 호출 된 가상 클래스를 찾아와서 다시 제거한다

//4. 위 3~4번이 계속 반복
// toggle () method 함수를 활용해서 실행한다

// ↓ 변수 설정//
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
// querySelectorall - 복수의 선택자를 가져올 때
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-x");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("click");
    searchResult.classList.add("active");
  });
});

// forEach searchbar 안에 들어가는 함수를 반복적으로 찾음
// 힘수는 인자 값을 받음 = 인수 =임의로 이름 지음
// console.log("click"); console 창에서 test 데이터가 잘 찾아왔는지 확인 해야함
// classList - 클래스 찾아오게 하는것
//() => {} 콜백 함수

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow"); //slide zone
const slideArrows = document.querySelectorAll(".slide_container_btn"); //slide button
const slidePagers = document.querySelectorAll(".slide_pager span"); //slide pager = slide 안에 있는 span
const slideImag = document.querySelector(".slide_img");
console.log(slideImag); //slide img

//[]대괄호에 들어가면 배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];
//img를 각각의 문자열의 형태로 저장
let i = 0;
let slideInterval;
let isTransitioning = false; //1슬라이드 안눌렀을 때 false로 대기

slideImag.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b02905422012/yerixxz/Chef/${pics[i]})`;
// ` 백팃
slidePagers[0].classList.add("active");

//2실제 이미지 및 페이저 값을 변경시켜주는 실행 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImag.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b02905422012/yerixxz/Chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

//자동으로 슬라이드 이미지가 변경될 수 있도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
  // 4초에 한번씩 증가시키는데 버튼을 누르면 그 지점부터 증가시켜줘
};

//자동 슬라이드 기능을 stop 하는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

//자동 슬라이드 재시작을 실행시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

//1화살표 클릭 및 이미지 변경 요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    //3연타 못누르게 return =문장종결/브레이크
    isTransitioning = true;
    //2슬라이드 누르면 true로 변경

    stopSlideShow();

    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
      // 현재 i의 값을 가지고 있는 해당 요소에서 전체 이미지의 개수로 나누겠다 0>1>2
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length; //2>1>0
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500); //0.5초 지나면 풀어줘
  });
});

//페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);
    setTimeout(startSlideShow, 500);
  });
});

startSlideShow();

//마우스 오버 하면 슬라이드 멈춰줘
slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideShow);
