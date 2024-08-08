const form = document.querySelector("form");
console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputText = document.querySelector("input[type='text']");
//   const word = inputText.value;
//   const count = word.length;
//   alert(`입력하신 단어의 ${word}의 글자수는 ${count} 입니다`);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const innerText = document.querySelector("input[type='text']");
  const word = innerText.value;
  const count = word.length;
  console.log(word, count);
});
