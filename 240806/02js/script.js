const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];
const newVideo = document.createElement("video");
//src 속성을 만들어서 newVideo 태그에 넣고 싶음
const srcVideo = document.createAttribute("src");
// 사이즈 조정. scss에서할 수도 있음
const widthVideo = document.createAttribute("width");
const autoplayVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;
widthVideo.value = "700";

newVideo.setAttributeNode(autoplayVideo);
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(srcVideo);
// container 자식 요소에 newVideo 넣기
container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  if (newVideo.paused) {
    this.play();
  } else {
    this.pause();
  }
});

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    } else if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
