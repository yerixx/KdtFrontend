//퀵 정렬(Quick Sort)
// 퀵 정렬(Quick Sort)은 분할 정복(Divide and Conquer) 방식으로 동작하는 정렬 알고리즘입니다.
// 좀 더 쉽게 설명하자면, 퀵 정렬은 배열을 작은 부분으로 나누고, 각 부분을 정렬한 뒤 다시 합치는 방식입니다.

// 공통정의:
// 배열 : 9개의 숫자 아이템을 가지고 있는 자료구조
// 배열의 0번째 인덱스 : 5(left)
// 배열의 8번째 인덱스 : 8(right)
// pivot : 기준값 => 배열 0번째 인덱스
// 비교값 : pivot 값을 제외한 나머지 배열 내 아이템
// 비교값 내 첫번째 인덱스: leftStartIndex = 3
// 비교값 내 마지막 인덱스: rightStartIndex = 8
// 규칙
// leftStartIndex 오른쪽으로 한칸씩 이동, pivot보다 큰 숫자를 만나면 일단 멈춤
// rightStartIndex 왼쪽으로 한칸씩 이동, pivot보다 작은 숫자를 만나면 일단 멈춤
// 위에 두 인덱스값이 조건에 충촉되어서 이동을 멈추게 되면, 두 숫자를 swap 해줌
// leftStartIndex와  rightStartIndex가 서로 교차가 되는 시점이 오면,
// rightStartIndex와 pivot의 값을 swap해줌

// 초기 테스트용 배열
let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];
/**
 * 배열의 두 요소의 위치를 교환하는 헬퍼 함수
 * @param {Array} arr - 대상 배열
 * @param {number} index1 - 첫 번째 위치
 * @param {number} index2 - 두 번째 위치
 */
const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
/**
 * 배열을 피벗을 기준으로 분할하는 함수
 * @param {Array} arr - 정렬할 배열
 * @param {number} left - 분할 시작 인덱스
 * @param {number} right - 분할 끝 인덱스
 * @returns {number} - 피벗의 최종 위치
 */
const divide = (arr, left, right) => {
  // 첫 번째 요소를 피벗으로 선택
  let pivot = arr[left];
  // 피벗 다음 위치부터 시작
  let leftStartIndex = left + 1;
  // 배열의 마지막 위치
  let rightStartIndex = right;
  // leftStartIndex와 rightStartIndex가 교차할 때까지 반복
  while (leftStartIndex <= rightStartIndex) {
    // 피벗보다 큰 값을 찾을 때까지 왼쪽에서 오른쪽으로 이동
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    // 피벗보다 작은 값을 찾을 때까지 오른쪽에서 왼쪽으로 이동
    while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
      rightStartIndex--;
    }
    // 교차하지 않았다면 두 값을 교환
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }
  // 피벗을 정렬된 위치로 이동
  swap(arr, left, rightStartIndex);
  return rightStartIndex;
};
/**
 * 퀵소트 메인 함수
 * @param {Array} arr - 정렬할 배열
 * @param {number} left - 정렬 시작 인덱스
 * @param {number} right - 정렬 끝 인덱스
 */
const quickSort = (arr, left, right) => {
  if (left <= right) {
    // 피벗을 기준으로 배열 분할
    let pivot = divide(arr, left, right);
    // 피벗 기준 왼쪽 부분 정렬
    quickSort(arr, left, pivot - 1);
    // 피벗 기준 오른쪽 부분 정렬
    quickSort(arr, pivot + 1, right);
  }
};
// 정렬 전 배열 출력
console.log("==== 정렬 전 ====");
console.log(arr);
// 퀵소트 실행 (전체 배열 범위 지정)
quickSort(arr, 0, arr.length - 1);
// 정렬 후 배열 출력
console.log("==== 정렬 후 ====");
console.log(arr);
