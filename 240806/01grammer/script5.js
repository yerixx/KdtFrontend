const openBtn = document.querySelector("#open");
const modalBox = document.querySelector("#modalBox");

openBtn.addEventListener("click", () => {
  modalBox.classList.add("active");
  openBtn.classList.add("btnActive");
});

const closeBtn = modalBox.querySelector("#profile > buttom");

closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("active");
  openBtn.classList.remove("btnActive");
});
