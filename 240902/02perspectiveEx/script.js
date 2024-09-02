const imageAll = document.querySelectorAll(".parallaxImage");

const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  console.log(scrollNum);

  if (scrollNum < 3000) {
    imageAll.forEach((item, index) => {
      item.style.transform = `translate3d(0,0,${
        scrollNum / (3 * (totalNum - index))
      }px)`;
    });
  }
});
