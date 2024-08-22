const form = document.querySelector("form");
const input = document.querySelector("#userNum");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = input.value;
  console.log(value);
  //실행하고자 하는 실행문에 사용가능 try
  try {
    if (value === "" || isNaN(value)) throw "숫자를 입력하세요";
    //숫자 형변환
    value = Number(value);
    if (value <= 10) document.querySelector("#result").innerText = value;

    if (value > 10) throw "10보다 작은 수를 입력하세요!";
  } catch (err) {
    alert(err);
  } finally {
    //catch문 유무의 상관 없이 무조건 종결 값 출력
    input.value = "";
  }
});
