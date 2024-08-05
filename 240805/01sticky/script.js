///코드 받기........


//sticky Event

window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  // console.log(hashList);
  const scrollY = window.scrollY;
  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

//Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

//최초 터치 및 마우스다운 좌표
let startX = 0;

//현재 이동중인 지점을 찾는 좌표값
let nowX = 0;

//터치 종료지점
let endX = 0;

//두번째 터치가 시작되는 지점
let listX = 0;

//터치된 위치 값 찾는 곳
const getClientX = (e) => {
  // // 손가락으로 터치 했는지 마우스로 클릭 했는지확인하고
  // const isTouches = e.touches ? true : false;
  // // 값을 찾아오게..........
  // return isTouches ? e.touches[0].clientX : e.clientX;
  return e.touches ? e.touches[0].clientX : e.clientX;
};
// console.log(hashContent);

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  // console.log(nowX);
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX =  listClientWidth - listScrollWidth);
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
  }
};

//재할당
const onScrollStart = (e) => {
  startX = getClientX(e);
  // console.log(startX);
  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
