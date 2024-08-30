const h1 = document.querySelector("h1");

const prograssbar = document.querySelector(".bar");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = `${percent(scrollNum, documentHeight)}%`;
  h1.innerText = per;
  prograssbar.style.width = per;
});
