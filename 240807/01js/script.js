const toggle = document.querySelector("#toggle");
const gnb = document.querySelector("#gnb");

console.log(toggle, gnb);

toggle.addEventListener("click", () => {
  gnb.classList.toggle("active");
});
