// addEventListener();
// console.log("끝");

//데이터가 정상적으로 들어왔는지 확인할 때 사용하면 편함
try {
  //실행시킬 코드 작성!
  console.log("시작");
  add();
  console.log("실행중......");
  console.log("실행중............");
  console.log("끝");
} catch (err) {
  //try문을 실행시켰을 때, 어떤 에러사랑이 발생될 경우 catch 명령문을 실행시킴
  console.log(`error 발생 ${err}`);
  console.log(`error 발생 ${err.name}`);
  console.log(`error 발생 ${err.message}`);
}
console.log("종료");
