//1. 배열을 명확하게 이해하고 사용할 수 있다
//2. 반복문을 적재적소에 활용할 수 있다
//3. 내가 원하는 기능 구현하는 함수를 만들 수 있다 --- 취업---
//4. 객체와 클래스를 만들고 프로토타입을 만들 수 있다

//window 객체 안에는 시간 관련 내장 함수 존재

// //CB1
// let count = 0;
// const cbFunc = () => {
//   console.log(count);
//   if (count++ > 4) clearInterval(timer);
//   // 위 아래 결과 값 다름
//   // if (++count > 4) clearInterval(timer);
// };
// const timer = setInterval(cbFunc, 300);

//map함수 = 배열안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산 작업 이후 다시 해당 아이템을 모아서 새로운 배열로 생성해주는 함수

// const arr = [10, 20, 30];
// //새로운 배열을 반환하고 싶을 때는 {} 사용 안함
// //{}는 목적이 있을 때만 사용
// const newArr = arr.map((item, index) => (item + 5) * index);

// console.log(newArr);

//3번예제
//setTimeout => 일정시간 지연 후 실행시키고자 할 때

// setTimeout(function () {
//   //this = setTimeout을 실행시키는 주최자 찾아줘
//   console.log(this);
// }, 300);

// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(item);
// });

// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

//this => 함수 형태 종류에 따라서 지칭하는 대상 달라짐

// const obj = {
//   vals: [1, 2, 3],
//   logvalues: function () {
//     console.log(this);
//   },
// };

// obj.logvalues();

//객체 안에 메서드 형식으로 정의한 함수는 외부의 별도 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 제거됨
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logvalues);

//객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법?

// const obj1 = {
//   main: "obj1",
//   func: function () {
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000);

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this.name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000);

// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `, ${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `, ${name}`;
//             console.log(coffeeList);
//             setTimeout(
//               (name) => {
//                 coffeeList += `, ${name}`;
//                 console.log(coffeeList);
//               },
//               500,
//               "카페라떼"
//             );
//           },
//           500,
//           "카페모카"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소"
// );

//1번티켓
// let coffeeList = "";

// const addAmericano = (name) => {
//   coffeeList += `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addMocha, 500, "카페모카");
// };

// const addEspress = (name) => {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에스프레소");

//class로 생성된 프로토 타입 함수 = 붕어빵 틀
// new Promise();

// let likepizza = true;
// //true =resolve
// //false = reject
// const pizza = new Promise((resolve, reject) => {
//   if (likepizza) {
//     resolve("피자를 주문합니다");
//   } else {
//     reject("피자를 주문하지 않습니다");
//   }
// });
// pizza.then((result) => {
//   console.log(result);
// });

new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
}).then((prevName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const name = `${prevName} 카페모카`;
      console.log(name);
      resolve(name);
    }, 500);
  });
});
