const manbo = prompt(
  "처음 만 보 걷기를 시작한 날을 입력해주세요",
  "2024-07-29"
);

const result = document.querySelector("#result");

const now = new Date();
const firstdate = new Date(manbo);

const toNow = now.getTime();
const toFirst = firstdate.getTime();

const calcDate = toNow - toFirst;
const finalDay = Math.round(calcDate / (24 * 60 * 60 * 1000));

result.innerText = finalDay;

// const userQuestion = prompt("만 보 걷기 시작일을 입력해주세요", "2024-06-14");
// const result = document.querySelector("#result");

// const today = new Date();
// const startDate = new Date(userQuestion);

// const passedTime = today.getTime() - startDate.getTime();
// const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

// result.innerText = passedDate;
