// //charAt
// const str = "hello Sir";
// const arr = ["today", "first", "theday"];

// // console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     //이 계산 이해 안됨
//     if (string[i] === word) count += 1;
//   }
//   return count;
// };
// const string = prompt("원하시는 문자열을 입력하세요");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");
// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result} 번 사용되었습니다!`
// );
//////////////////////////
//indexOf()

const str1 = "Good morning, everyone. Beautiful morning.";
console.log(str1.indexOf("morning"));

let firstIndex = str1.indexOf("morning");
let secondIndex = str1.indexOf("morning", firstIndex + 1);
let thirdIndex = str1.indexOf("morning", secondIndex + 1);
console.log(thirdIndex);
/////////////////////////////////////////////

//특정 문자열로
// startWidth()

// const str2 = "Hello, everyone.";
// console.log(str2.startsWith("hello"));
// console.log(str2.startsWith("Hello"));
// // 시작값만 같으면 true
// console.log(str2.startsWith("He"));
/////////////////////////////////////////////

//  인자값 , 몇번째부터 시작 하는지?
// console.log(str2.startsWith("el", 1));

// console.log(str2.endsWith("everyone."));
// console.log(str2.endsWith("Everyone."));
// console.log(str2.endsWith("one."));
/////////////////////////////////////////////
// //ES6 이전 문법
// console.log(str2.indexOf("every") === -1);
// //ES6 이후 문법
// console.log(str2.includes("every"));

// let str3 = " ab cd ef ";
// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

/////////////////////////////////
// const str2 = "Hello, everyone.";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());
/////////////////////////////////

// const str2 = "Good Morning.";
// console.log(str2.length);

// console.log(str2.substring(5));
// console.log(str2.substring(0, 4));

// console.log(str2.slice(0, 4));

// //slice()
// console.log(str2.slice(-5, 12));

const str5 = "Hello everyone";
console.log(str5.split(" "));
console.log(str5.split(""));
