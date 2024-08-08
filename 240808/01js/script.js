const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // 세가지 인자값 open("경로", "팝업창 이름", "팝업창 옵션 => width,hegiht // 위치")
  window.open("./notice.html", "popup", "width=600 height=500");
});

//웹브라우저 들어오자마자 바로 띄울수도 있음
// window.open("./notice.html", "popup", "width=600 height=500");
