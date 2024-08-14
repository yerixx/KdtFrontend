//search modal
const searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modalSearch").classList.add("active");
});

const items = document.querySelectorAll(".close , section");
//******************
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modalSearch").classList.remove("active");
  });
});

//search bar
const searchBar = document.querySelector(".search input[type='text']");

searchBar.addEventListener("focus", function () {
  // 부모의 다음번 형제요소
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

//Accordion Event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

///**********
const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      // 1. 모든 스타일 기본값으로 리셋
      item.style.display = "none";
    });

    // 2.선택받았는지, 선택받지 못했는지 구분
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });

    //3.해당요소가 active를 가지고 있따면 remove 시키기
    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});
