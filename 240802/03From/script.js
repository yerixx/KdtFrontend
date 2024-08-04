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

const checkBox = document.querySelector("input[name='alarm']:checked");
