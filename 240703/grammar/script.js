// 전체 너비에 대한 정의를 다시 해야함
//버튼을 눌렀을 때 이동하게 하고싶음
const btn = document.querySelector(".controls");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");

// 배열 개수 측정 후 복사하기 위해
const slideCount = slide.length;
// 배열 사이즈 재측정
const slideWidth = 200;
const slideMargin = 30;
// 인덱스 0부터 시작하게
let currentIdx = 0;

//복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수 (1)
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  // 복제본까지 width,hegiht 알아야함
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.computedStyleMap.width = newWidth;
};

//복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수 (2)
const setInitialPos = () => {
  const initialTraslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTraslateValue}px)`;
};

// li node를 복제하기 위한 코드
// 슬라이드 개수만큼 복사본 만들어서 증가
// 선언한 함수 실행
const makeClone = () => {
  // 초기값 0 으로세팅 후 5전까지 반복
  for (let i = 0; i < slideCount; i++) {
    // slide[i]원본을 복제해서 cloneSlide에 넣겠다
    const cloneSlide = slide[i].cloneNode(true);
    // 클론임을 식별 시키기
    cloneSlide.classList.add("clone");
    // 특정 node 뒤에 값 넣기
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i > 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  // 슬라이드 애니메이션 효과
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

// 함수 선언
makeClone();
// 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수 정의
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
  console.log(currentIdx, slideCount);
};

// 버튼을 누를 때 인덱스가 바꾸게 하고싶음
// 버튼 클릭 이벤트 함수를 컴퓨터가 인식하게 해야함
nextBtn.addEventListener("click", () => {
  // console.log("click");
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  // console.log("click2");
  moveSlide(currentIdx - 1);
});

//자동슬라이드 기능 및 정지 기능 함수
let timer = undefined;

const autoSlide = () => {
  // 타이머가 원래 초기값과 같다면
  if (timer === undefined) {
    // 주기적 시간을 가지고 움직였으면 좋겠어 3초에 한번씩
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

// 자동으로 슬라이드 되는 기능을 없애라
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btn.addEventListener("mouseover", () => {
  stopSlide();
});
btn.addEventListener("mouseout", () => {
  autoSlide();
});
