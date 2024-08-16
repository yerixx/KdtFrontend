// //ES6 문법이 적용되기 전
// const str5 = "Hello, everyone";
// //배열로 바꿈
// // const array5 = str5.split("");

// //문자열을 배열로 바꿔주는 목적만 가지고 있음
// const array5 = [...str5];
// const str6 = array5.join("");

// console.log(array5);
// console.log(str6›);

// const string = prompt("영문 소문자로 된 문자열을 입력하세요");

// // const firstch = string[0].toUpperCase();
// // const remainStr = string.slice(1);
// // const result = firstch + remainStr;

// //...string.slice(1) 문자열을 배열로 가져옴
// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");

// document.write(result);

//생성자 함수를 통해서 배열을 만드는 방법
// let arr = new Array();

// arr[0] = "first";
// arr[1] = "second";
// console.log(arr);

// let obj = new Object(s);

// 변수 / 빈배열 할당 및 선언

let season = [];
season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";
console.log(season);

//직접 배열 선언 // 할당
const pets = ["dog", "cat", "lion"];
console.log(pets);
