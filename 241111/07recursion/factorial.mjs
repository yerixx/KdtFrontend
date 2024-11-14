//고급함수 = 고급함수
function factorial(n) {
  if (n <= 1) return 1; // 기저 조건: n이 1 이하일 때 1을 반환
  return n * factorial(n - 1); // 재귀 단계: n과 (n-1)의 팩토리얼을 곱함
}
console.log(factorial(5));

//명령형 방식 = 저급함수
const factorialA = (n) => {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
};
console.log(factorialA(5));
