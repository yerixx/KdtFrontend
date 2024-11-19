let arr = [4, 3, 2, 1];
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

// (n-1) + (n-2) + (n-3) ... + 1
// 등차 수열

console.log("===배열 정렬 전 ===");
console.log(arr);

bubbleSort(arr);

console.log("===배열 정렬 후 ===");
console.log(arr);

// 1.	for 루프를 두 번 사용해 배열의 각 값을 비교하면서 정렬합니다.
// 	•	첫 번째 for 루프: 배열을 몇 번 반복할지를 결정하며, 한 번의 반복이 끝날 때마다 큰 값이 배열의 끝에 위치합니다.
// 	•	두 번째 for 루프: 인접한 두 값을 비교하며, 큰 값이 뒤로 이동하도록 합니다.
// 	2.	if (arr[j] > arr[j + 1]) 조건문을 통해 인접한 두 값(arr[j]와 arr[j + 1])을 비교합니다. 만약 앞의 값이 뒤의 값보다 크다면 값을 교환하여 큰 값이 뒤로 가게 합니다.
// 	3.	모든 비교가 끝나면 배열이 오름차순으로 정렬됩니다.
