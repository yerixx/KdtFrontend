const btn = document.querySelector("input[type='button']");
const showSales = () => {
  const price = document.querySelector("#price").Value;
  const sale = document.querySelector("#sale").Value;
  const savedPrice = price * (sale / 100);
  const resulPrice = price - savedPrice;
  console.log(price, sale);
  document.querySelector(
    "p"
  ).innerText = `상품의 원래가격은${price}원이고 할인율은 ${rate}% 입니다
          ${savedPrice}원을 절약한 ${resulPrice}원에 구매하실 수 있습니다`;
};
button.addEventListener("click", showSales);
