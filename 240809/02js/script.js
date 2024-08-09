// Math 수학객체   => 함수
let num = 2.1234;
let num01 = 2.8765;

let maxNum = Math.max(10, 5, 8, 30);
let minNum = Math.min(10, 5, 8, 30);
let roundNum = Math.round(num);
let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);
let rndnum = Math.random();
let piNum = Math.PI;

document.write(maxNum, "<br/>");
document.write(minNum, "<br/>");
document.write(roundNum, "<br />");
document.write(floorNum, "<br />");
document.write(ceilNum, "<br />");
document.write(rndnum, "<br />");
document.write(piNum, "<br />");

// // 반올림
// let roundNum = Math.round(num);
// // 소수점 버리기
// let floorNum = Math.floor(num01);
// // 무조건 반올림
// let ceilNum = Math.ceil(num);
// //난수 형태. 랜덤. 무작위라서 인자값 안넣음. 1미만만 나옴. 1 못나옴
// let rndNum = Math.random();
// //절때 45 못나옴 나오게 하려면 +1 해야함
// let rndNum2 = Math.random() * 45;
// //원주율.
// let piNum = Math.PI;
