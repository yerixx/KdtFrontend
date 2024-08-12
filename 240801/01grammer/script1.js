//사용자로부터 이름과 나이를 입력받으세요
//반드시 콜백함수를 통해서 사용자의 값을 활용해 alert 으로 "안녕하세요 00님 나이가 00세 이시군요"

// const username = prompt("이름을 입력해주세요");
// const useryear = Number(prompt("생년월일을 입력해주세요", "1998"));

// const userAge = () => {
//   let age = 2024 - useryear;
//   alert(`${username}님 나이가 ${age}이시군요`);
// };
// userAge();
/////// 집가서 해보기!!
// const userName = prompt("이름을 입력해주세요");
// const userYear = prompt("생년월일을 입력해주세요");

// const userinfo = () => {
//   let userAge = 2024 - userYear;
//   window.document.write(`안녕하세요 ${userName}님 나이가 ${userAge} 이시군요 `);
// };
// userinfo();

//부모 요소 생성
function getData(callback) {
  const userName = prompt("이름을 입력해주세요");
  const userAge = prompt("나이를 입력해주세요");
  callback(userName, userAge);
}
function showdata(name, age) {
  alert(`안녕하세요 ${name}님 나이가 ${age} 이시군요 `);
}
getData(showdata);

function hello() {
  //함수가 실행되면 안녕하세요 반환
  return "안녕하세요!";
}
function bye() {
  //함수가 실행되면 안녕히가세요 반환
  return "안녕히가세요!";
}

function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}
userCheck("홍길동", hello);
userCheck("영심이", bye);

/////////

const init = () => {
  return (a, b) => {
    return a - b > 0 ? a - b : b - a;
  };
};
console.log(`${init()(30, 20)}`);

document.getElementById("loadDataBtn").addEventListener("click", function () {
  fetch("text.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      return response.json();
    })
    .then((data) => {
      // JSON 데이터 처리
      const jsonContent = document.getElementById("jsonContent");
      jsonContent.innerHTML = `
              <p><strong>Prompt:</strong> ${data.prompt}</p>
              <p><strong>Size:</strong> ${data.size}</p>
          `;
    })
    .catch((error) => {
      console.error("JSON 파일을 불러오는 중 오류가 발생했습니다:", error);
    });
});
