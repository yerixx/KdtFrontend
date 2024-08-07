// switch문을 사용해서 신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS
// 조건문을 사용해서 예외조항처리를 해주세요

const subjects = prompt(
  "신청할 과목의 번호를 입력해주세요",
  "1-html, 2-css, 3-script"
);

if (subjects !== null) {
  switch (subjects) {
    case "1":
      alert("html을 신청하셨습니다");
      break;
    case "2":
      alert("css을 신청하셨습니다");
      break;
    case "3":
      alert("script을 신청하셨습니다");
      break;
    default:
      alert("돌아가");
  }
}

// const subject = prompt(
//   "신청할 과목의 번호를 입력해주세요",
//   "1-html, 2-css, 3-script"
// );

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("html을 신청하셨습니다");
//       break;
//     case "2":
//       alert("css를 신청하셨습니다");
//       break;
//     case "3":
//       alert("script를 신청하셨습니다");
//       break;
//     default:
//       alert("잘못된 입력입니다. 다시 시도해주세요.");
//   }
// }
