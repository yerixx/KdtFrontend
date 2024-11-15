//콜백함수: 함수 안에 또 다른 함수 선언, 호풀
//함수의 호출을 다른 함수가 결정짓는다

//콜백지옥
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stop!");
        });
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();

const likePizza = true;

//선언문
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문 합니다");
  else reject("피자를 주문하지 않습니다.");
});
