//곰 19살
//여우 27살
//사자 32살
//얼룩말 41살
//기린 56살

//20세 이상
//30세 이상
//40세 이상

const userDataList = [
  {
    name: "곰",
    age: 19,
  },
  {
    name: "여우",
    age: 27,
  },
  {
    name: "사자",
    age: 32,
  },
  {
    name: "얼룩말",
    age: 41,
  },
  {
    name: "기린",
    age: 56,
  },
];
const buttons = document.querySelectorAll("#button");
const result = document.querySelector("#result");

const updateList = (fillteredList) => {
  let listHtml = "";
  fillteredList.forEach((data) => {
    listHtml += `<li>${data.name}: ${data.age}세</li>`;
  });
  result.innerHTML = listHtml;
};

//리팩토링 이거 개념 다시 설명 듣기
const onClickBtn = (e) => {
  const targetAge = e.target.dataset.age;
  const fillteredList = userDataList.filter((data) => data.age >= targetAge);
  console.log(fillteredList);
  //배열 자체 출력은 안돼서 변환 시켜줘야함
  updateList(fillteredList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickBtn(e);
  });
});
