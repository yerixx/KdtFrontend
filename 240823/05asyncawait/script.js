// const displayHello = async () => {
//   console.log("Hello");
// };

// console.log(displayHello());
/////////////////////////////////////////////
// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => {
//     resolve(fav);
//   });
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => {
//     resolve(`Hello ${subject}`);
//   });
// };

// whatsYourFavorite().then(displaySubject).then(console.log);
/////////////////////////////////////////////

//설명 듣기
// async => 함수
// await => 예약어 (*특정 요소의 실행을 기다렸다가 진행되도록 하게 해주는 예약어)
// await 예약어는 절대로 혼자 독립적 사용x
// async 함수 내부에서만 반드시 사용
const whatsYourFavorite = async () => {
  const fav = "javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};

// whatsYourFavorite().then(displaySubject).then(console.log);
//매번 then을 써야할까?

//whatsYourFavorite,displaySubject는 비동기처리방식이기 때문에 동시출발함.. 그래서 기다렸다가 받아야 하는 값을 못받아와서 실행을 못함.. 항상 then을 쓸 수 없으니
//  async await를 사용해서 순서를 정해서 사용해야함.. 안그럼 값을 못찾아옴

const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};
init();
