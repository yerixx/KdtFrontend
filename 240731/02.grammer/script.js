const students = ["David", "Jullien", "Peter"];

// for(초기값; 반복범위; 증감문){

// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// students의 자식은 인자값으로 받음. 임의로 이름 지정
// students.forEach((student) => {
//   console.log(student);
// });
// students.forEach((student, index, arr) => {
//   console.log(`${index + 1}번째 학생:${student}in [${arr}]`);
// });

// //students 중 아이템을 찾아서 student에 넣겠다
// for (student of students) {
//   console.log(student);
// }

// const theBook = {
//   title: "Javascript",
//   pages: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }

let stars = Number(prompt("별의 개수 입력!"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  //0 값이어도 일단 한번 실행 하고 while 실행
  document.write("*");
  stars--;
} while (stars > 0);
