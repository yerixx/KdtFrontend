const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();

// current.innerText = `👻오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다`;

//이렇게도 쓸 수 있음
current.innerText = `👻오늘은 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 입니다`;

//정석
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );
  // console.log(birthDay);

  const resultDays = document.querySelector("#days");
  const resultHours = document.querySelector("#hours");

  //현시점에 밀리초 값 -
  const passed = today.getTime() - birthDay.getTime();
  // console.log(passed);
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);
  // console.log(passedDays);

  resultDays.innerText = `현재 나이는 ${passedAges}이며, `;
  resultHours.innerText = `현재까지 ${passedHours}의 시간이 흘렀습니다`;
});
