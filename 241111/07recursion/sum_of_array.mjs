//배열 arr의 모든 요소를 재귀적으로 합산하는 함수

// 배열의 모든 요소를 합산하는 재귀 함수
const sumArray = (arr) => {
  // 기저 조건: 배열이 빈 경우 0을 반환
  if (arr.length === 0) {
    return 0;
  }
  // 첫 번째 요소 + 나머지 요소들의 합 (재귀적으로 호출)
  return arr[0] + sumArray(arr.slice(1));
};

// 예시 사용
const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); // 15 출력
