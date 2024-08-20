//어디서부터 이벤트가 시작될 것인가
//이벤트가 시작된 이후에 어떤 값을 생성 & 처리할 것인가
//어떻게 자료구조를 만들고 갈 것인가?

const form = document.querySelector("form");
const result = document.querySelector("#result");
const inputText = document.querySelector("#userid");

const userData = [
  {
    id: "123",
    name: "곰",
  },
  {
    id: "1021",
    name: "사자",
  },
  {
    id: "6021",
    name: "여우",
  },
];

const findUser = (searchId) => {
  const targetData = userData.find((data) => data.id === searchId);
  // console.log(typeof searchId);
  if (targetData === undefined || targetData === null) {
    result.innerText = "유저 검색 결과 없음";
  }
  result.innerText = targetData.name;
};

inputText.addEventListener("keyup", (e) => {
  // console.log(e.target.value);
  // 형변환 시켜줘야함*****
  const searchId = parseInt(e.target.value);
  if (isNaN(e.target.value)) result.innerText = "숫자가 아닙니다!";

  findUser(searchId);
});

/////////////////////
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userText = inputText.value;
//   userData.forEach((item) => {
//     if (item.id === userText) {
//       result.innerText = item.name;
//     } else if (item.id !== userText && userText === "") {
//       result.innerText = "다시 입력해 주세요";
//     }
//   });
// });
/////////////////////
