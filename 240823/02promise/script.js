//기존 callback 함수의 단점을 최소화 하고자 나온 첫번째 대안

//promise = 약속

//callback 함수 중 가운데 어떤 요소라도 1개만 에러가 발생되는 경우, 연결되어있는 다른 callback함수 실행에도 영향을 미친다!!
//그런데 만약 callback 함수가 많이 연결되어 있는 경우에는 어떤 callback 함수에서 에러가 발생되었는지 서칭 && 디버깅 하기 매우 힘들다

//에러를 표시 해주게 약속하자!

// 생성자 함수 혹은 클래스를 통해서 탄생된 프로토타입!

//pizza인 인스턴스 객체는 부모 요소의 속성을 할당받음!!!

//Promise는 반드시 콜백함수를 받고
// 인자값으로 두가지 함수가 들어옴 (정상적으로 실행됐을 때 실행 // 에러가 났을 때 실행시킬 함수)

const likePizza = true;

//producing code *제작코드 영역
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다");
  else reject("피자를 주문하지 않습니다.");
});

//consuming code = 실행코드 영역
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
