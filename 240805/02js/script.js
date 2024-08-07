const btn = document.querySelector(".main_desc");

const text = document.querySelector(".main_text");

btn.addEventListener("click", () => {
  text.classList.toggle("active");
});
