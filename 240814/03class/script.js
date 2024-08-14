//생성자 함수 대문자로 시작
function Book(title, pages, done = false) {
  //field
  this.title = title;
  this.pages = pages;
  this.done = done;

  //method
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독!");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

//1.생성자 함수 선언시..
//2.동시에 프로토타입 객체가 생성됨(*호출해서 사용해야함)
//3.변수 선언 && 생성자 함수 호출 및 할당 하는 순간
//4.생성자 함수가 가지고 있던 프로토타입 객체가 활성화 되어서 해당 변수에 인스턴스객체 생성 => 해당 변수에는 인스턴스 객체가 할당 되는 것 변수 = 인스턴스객체가 되는 것

// java script => 객체지향 프로토타입 기반의 프로그래밍 언어

//2016년에 class 도입 : syntactic sugar

//class
//반드시 method 함수만 쓸 수 있음
class book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done = false ? (str = "읽는 중 ") : (str = "완독");
    return str;
  }
}

//TS => 접근제어자 // 추상화 시점에서 많이 씀
//public, private, protrcted
