const btn = document.querySelector("input[type='button']");

const showPrice = () => {
  const price = document.querySelector("#price").value;
  const sale = document.querySelector("#sale").value;

  const savePrice = price * (sale / 100);
  const resulPrice = price - savePrice;

  document.querySelector(
    "p"
  ).innerText = `원래가격 ${price}. ${savePrice}을 절약한 ${resulPrice} 에 구매가능`;
};
btn.addEventListener("click", showPrice);
