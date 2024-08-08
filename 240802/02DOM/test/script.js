const title = document.querySelector("h1");

const originalText = title.innerText;

title.addEventListener("mouseover", function () {
  this.innerText = "Hello";
});
title.addEventListener("mouseleave", function () {
  this.innerText = originalText;
});

const image = document.querySelector(".img");

image.addEventListener("click", () => {
  image.classList.toggle("active");
});
