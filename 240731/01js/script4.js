// 폼 요소 (*input 태그) 입력될 값 절대 전역요소 찾아올 수 없음
//반드시 event 액션이 발생된 이후에만 value 값을 찾아올 수 있음

const button = document.querySelector("input[type='button']");
const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  const savedPrice = price * (rate / 100);
  const resulPrice = price - savedPrice;

  document.querySelector(
    ".bottom_info p"
  ).innerText = `상품의 원래가격은${price}원이고 할인율은 ${rate}% 입니다
          ${savedPrice}원을 절약한 ${resulPrice}원에 구매하실 수 있습니다`;
};

button.addEventListener("click", showSales);
