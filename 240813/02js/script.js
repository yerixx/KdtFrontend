// //객체생성 = 선언
// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

//js 어딘가에 class 생성자함수를 활용해서 이미 누군가가 객체를 만들어놓았음

//class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 반드시 new 예약어 + prototype함수를 활용해야함

//prototype을 통해서 생성된 값을 인스턴스 객체오 설정

// 최초에 선언한 변수의 값으로 할당- 정석
// let book2 = new Object();

// book2.title = "타입스크립트";
// book2.author = "박예림";
// book2.bestSeller = "yes";

// console.log(book2);

// let book3 = new Array();
// console.log(typeof book3);

// //객체 안에 담겨있는 데이터를 찾아온다
// //property에 접근하는 2가지 방법
// //1. 온점표기법 8~90% 사용
// //2. 대괄호 표기법

// console.log(book1.title);
// console.log(book1["level"]);

// //property키 수정
// book1.study = "ready";

// //property키 추가
// book1.master = "David";

// //property키 삭제
//delete book2.bestSeller;

/////////////////////////////
//객체 중첩
const student = {
  name: "박예림",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    // average: () => {
    //   return (student.score.history + student.score.science) / 2;
    // },

    //중첩일때 function()사용 추천
    average: function () {
      return (this.history + this.science) / 2;
    },
    //like method 함수 정의 방법 2
    like() {
      console.log(`박예림님은 컴퓨터를 좋아합니다!`);
    },
  },
};

//function //화살표 함수

console.log(student.score.history);
console.log(student.score.average());

//객체 안에 property의 일부로써 탄생된 함수는 method라고 칭한다

student.score.like();
