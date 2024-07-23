// js 공부방법
// 1. 가장 얇고 쉬운책 선택해서 프로세스 이해
// 2. 도마뱀 책

const songs = document.querySelectorAll(".albumTable_song");
// console.log(songs);
// song 변수 안에 .albumTable_song 값이 하나씩 들어오게 함
for (let song of songs) {
  // song 안에 재생버튼 가져오기
  //querySelectorAll 아닌 이유, 각각의 태그 하나씩 찾고 반복해서
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    console.log(e);
    // event 안에 target 만 찾아옴
    // target 과 가~장 가까운 td 찾아옴 *다른행의 td가 아님
    // 그 부모요소 td 에서 audio 찾아옴
    // console.log(e.target.closest("td").querySelector("audio"));

    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

//e객체 발생시 target 찾음 ||  currentTarget
// currentTarget 은 event 핸들러가 부착되어진 요소 의미 click 을 찾아오는 것
// target은 실제 이벤트가 발생된 요소를 가져옴
