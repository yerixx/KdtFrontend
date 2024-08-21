// 직접 패턴을 부여하는 방식을 더 많이 씀
// const regexp = /\d{3}/;
// console.log(regexp.test("hello"));
// console.log(regexp.test("123"));

// 프로토타입 방식
// const regexp = new RegExp(/\d{3}/);
// console.log(regexp.test("hello"));
// console.log(regexp.test("123"));

// const str = "ES2024 is powerfull";
// const regexp = /es/i;

// console.log(str.match(/ES2024/));
// console.log(str.replace(/ES2024/, "Javascript"));
// console.log(regexp.test(str));

// console.log(str.match(/ES\d{4}/));
// const hello = "Hello, everyone.";
// console.log(/^H/.test(hello));
// console.log(/^h/.test(hello));
// console.log(/^h/i.test(hello));

// console.log(/one$/.test(hello));
// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));

// const str = "ES2024";
// //[] 범위를 지정하고 싶을 때 사용
// console.log(str.match(/[^0-9]/g));
// console.log(str.match(/^[0-9]/g));

// const str = "Oooops";
// // 2번 반복되는 패턴을 찾아라
// console.log(str.match(/o{2}/));
// //최소 2번 이상 반복되어지는 패턴을 찾아라
// console.log(str.match(/o{2,}/));
// //최소 2번 이상 반복되어지면서 4번 까지 반복되는 패턴을 찾아라
// console.log(str.match(/o{2,4}/i));

// const str2 = "ES2024(ES8) is powerful";
// // 정규표현식에서는 버티컬바 한개만 써야함
// // 띄어쓰기 하면 안됨. 문자로 인식함
// const regexp = /ES2024|ES8/;

// console.log(regexp.test(str2));

//숫자만 가능한 정규표현식 패턴
const regexp = /^[0-9]+$/;
// 양의 정수만 가능한 정규표현식 패턴
const regexp1 = /^[1-9]\d*$/;
//음의 정수만 가능한 정규표현식 패턴
const regexp2 = /^\-[1-9]\d*$/;
//영문자만 찾아오도록 하는 정규표현식 패턴
const regexp3 = /^[a-zA-Z]+$/;
//숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
const regexp4 = /^[a-zA-Z0-9]+$/;
//한글만 찾아오도록 하는 정규표현식 패턴
const regexp5 = /^[가-힣]+$/;
// 한글과 영문자만 가능한 정규표현식 패턴
const regexp6 = /^[가-힣a-zA-Z]+$/;

//문자열의 길이가 5~10개 패턴
const regexp7 = /^.{5,10}$/;
