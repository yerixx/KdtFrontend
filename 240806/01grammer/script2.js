const userId = document.querySelector("#userId");
console.log(userId);

userId.addEventListener("focus", function () {
  this.style.background = "pink";
});

userId.addEventListener("blur", function () {
  this.style.background = "yellow";
});
