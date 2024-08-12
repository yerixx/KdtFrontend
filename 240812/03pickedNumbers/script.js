//random
//반복문

const form = document.querySelector("form");
const number01 = document.querySelector("#number01");
const number02 = document.querySelector("#number02");
const result = document.querySelector("#result");

const submit = document.querySelector("input[type='submit']");
const reset = document.querySelector("input[type='reset']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const numberA = number01.value;
  // const numberB = number02.value;
  // console.log(numberA, numberB);

  let winner = "";
  let pickedNumbers = [];
  //값을 찾아오거나 생성할 때
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번 `;

    result.innerHTML = `<b>축하드립니다</b> <br/> 당첨자 : ${winner} 입니다`;
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
