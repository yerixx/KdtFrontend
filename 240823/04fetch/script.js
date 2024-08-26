// const xhr = new XMLHttpRequest();

// xhr.open("GET", "student.json");
// xhr.send();

// const renderHTML = (students) => {
//   // const result = document.querySelector("#result");
//   let output = "";

//   //블락변수?
//   for (let student of students) {
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//     <li> 전공 : ${student.major}</li>
//     <li> 학년 : ${student.grade}</li>
//     </ul>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     // console.log(students);
//     renderHTML(students);
//   }
// };

//fetch 사용법
//fetch는 실행과 동시에 반환 값이 promise 임
// console.log(fetch("student.json")) 여기서 오류 뿌리 확인 하기;

fetch("student.json")
  .then((Response) => Response.json())
  .then((json) => {
    //재할당
    let output = "";
    json.forEach((student) => {
      output += `
        <h2> ${student.name}</h2>
        <ul>
          <li>전공학과 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
        </ul>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(`${err} 에러발생`));
