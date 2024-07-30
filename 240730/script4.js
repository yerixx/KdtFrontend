//사용자에게 숫자 1개를 입력 받고,
//해당 숫자가 짝수인지 홀수 인지 확인하여, 짝수라면 알림창에 "짝수" 출력, 홀수라면  알림창에 "홀수 " 출력
//단,사용자가 취소 버튼을 클릭할 수 있음을 감안하여 예외조항처리를 반드시 해주세요
//짝수는 반드시 2로 나누어짐
//반드시 삼항조건연산자로

let userNumber = Number(prompt("숫자를 입력해주세요"));
if (userNumber !== null) {
  userNumber = parseInt(userNumber);
  userNumber % 2 === 0
    ? alert(`${userNumber} : 짝수`)
    : alert(`${userNumber} : 홀수`);
}

// let nums = number % 2 === 0 ? "짝수" : "홀수";
// alert(nums);
