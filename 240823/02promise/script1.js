const result = document.querySelector("#result");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");

  if (coffee !== null && coffee !== "") {
    result.innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다");
  }
});
const display = (coffee) => {
  const end = document.querySelector("#end");
  end.innerText = `${coffee} 준비 완료!`;
  end.classList.add("active");
  result.classList.add("done");
};

const showError = (err) => {
  console.log(err);
};

order.then(display).catch(showError);

console.log(order);

// 1. pending
//     1. promise를 생성하고 실제 실행을 시키기 전, 대기 상태
// 2. fullfilled
//     1. promise를 통해서 어떤 실행값 혹은 실행문을 정상적으로 실행시킨 상태
// 3. rejected
//     1. promise를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태
