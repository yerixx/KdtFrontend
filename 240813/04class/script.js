//class : 자바 스크립트 안에서 반복적으로 사용될 특정 요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 사용

//매일 신간책이 들어오면 객체 데이터로 만들어서 B/E 서버에 데이터를 등록할 수 있도록 지원해주세요!

//신간책 300권
const newBook1 = {
  title: "당신이 누군가를 죽였다",
  author: "히가시노 게이고",
  price: 17820,
  category: "미스터리 스릴러",
};

//class를 생성하는 2가지 방법

/////////////////////////
// 1.생성자 함수 생성 (*예전 방법임!)
// 절대로 화살표 함수 사용 x  => this 객체를 무조건 사용해야해서
// 반드시 함수의 이름 대문자로 시작. new Date()

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

//1-1. ♦️♦️♦️♦️♦️♦️ 생성자 함수 선언 (*function 대문자)

//1-2. prototype 객체 (*자동탄생)

//1-3. 생성자 함수를 실행시키는 순간 prototype 객체를 실행할 준비를 함

//1-4. 생성자 함수 실행 => 함수의 값을 전달받는 변수 => 인스턴스 객체

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노게이고",
  "17820",
  "미스터리스릴러"
);
console.log(book1);

/////////////////////////

//2 class 명령어를 사용해서 클래스를 선언
