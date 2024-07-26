// JS 변수 선언시 var let const 사용
//  var는 무조건 전역변수로 움직임
// 개발작업은 공동협업을 하는데
// a개발 test -> 카운팅
// b개발 test -> 유효성
// -> 오류 발생

const trigger = document.querySelector(".trigger");
// console.log(trigger);
trigger.addEventListener("click", () => {
  // console.log("click");
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  // console.log(gnb, sns);
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  // trigger 를 this로 사용하고 싶으면 function() 사용  화살표 함수일 때 this는 window를 지칭함
  trigger.classList.toggle("active");
});
