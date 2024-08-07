const btn = document.querySelector("input[type='button']");

const result = () => {
  const a = parseInt(document.querySelector("#a").value);
  const b = parseInt(document.querySelector("#b").value);

  const sum = a + b;

  document.querySelector(".res").innerText = `${sum}입니다`;
};

btn.addEventListener("click", result);
