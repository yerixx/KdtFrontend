const phoneNumber = document.querySelector("input[type='text']");
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  const numberValue = this.value;
  // -를 찾아서 ""빈 문자열로 치환하겠다

  const trimNumber = numberValue.replace(/-/g, "");

  //첫번째 방법
  // 0시작, 0-9끝 // 2-자리는 받았으니 최소9,최대10자리
  // const regexp = /^[0]\d{8,9}[0-9]$/.test(trimNumber);

  //두번째 방법
  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);

  //세번째 방법
  // const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);

  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요";
  else warningMessage.innerText = "";
});
