const userQuestion = prompt("만 보 걷기 시작일을 입력해주세요", "2024-06-14");
const result = document.querySelector("#result");

const today = new Date();
const startDate = new Date(userQuestion);

const passedTime = today.getTime() - startDate.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
