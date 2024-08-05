// //form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현

// //요소.value
// const button = document.querySelector("input[type='submit']");
// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // const orderName = document.querySelector("#orderName");

//   //한번더 설명 듣기 name으로 받아 오는거
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });
// //forms 배열
// console.log(document.forms[0].elements[4]);

//특정 옵션을 찾아오고 싶을 때
const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

//option 값이 바뀌면 change 이벤트 핸들러 작동
select.addEventListener("change", function () {
  console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다. 가격은 5000원 입니다.`);
});

const radioBox = document.querySelectorAll("input[name='userAge']");
// 콘솔로 찾고
// console.log(radioBox);
//해당 요소에 반복문을 사용해서, 각각의 아이템에 이벤트를 적용해야함
radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    // target = 이벤트가 발생된 지점에서 찾아온다
    const target = e.target;
    // console.log(target.value);
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다`);
    }
  });
});

// const checkBox = document.querySelector("input[name='alarm']:checked");
const checkBox = document.querySelectorAll("input[name='alarm']");
// console.log(checkBox);
checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    if (target.checked) {
      alert(`당신의 관심은 ${target.value}입니다`);
    }
  });
});
