// phoneNum 칸에 숫자 4개가 들어오면 다음칸으로 넘어오게 해줘
//phoneNum 값 찾아줘야함

// 사용자가 값을 넣을 때 phone1에 입력된 값을 찾고 싶음
const changephone1 = () => {
  // phone1Value -> phone1에 입력된 값을 찾고 싶음
  const phone1 = document.querySelector("#phone1").value;
  // 개수가 3과 같다면
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};
const changephone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  if (phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
};

const changephone3 = () => {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;

  if (phone1.lenght === 3 && phone2.lenght === 4 && phone3.lenght === 4) {
    // removeAttribute -> token_button 속성중 내가 원하는 속성 지워줘
    document.querySelector("#token_button").removeAttribute("disabled");
  }
};
