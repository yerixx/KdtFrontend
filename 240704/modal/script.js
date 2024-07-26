// 버튼 불러오기
const btn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const close = document.querySelector("#close");

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});
