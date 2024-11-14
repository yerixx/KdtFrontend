const hanoi = (count, from, to, temp) => {
  if (count === 0) return; // count가 0이면 아무것도 안 하고 끝냄
  hanoi(count - 1, from, temp, to); // 작은 원반들을 임시 기둥으로 옮김
  console.log(`원반 ${count}을 ${from}에서 ${to}로 이동!`); // 가장 큰 원반을 목적지로 옮김
  hanoi(count - 1, temp, to, from); // 임시 기둥에 있는 작은 원반들을 목적지로 옮김
};

// 원판 3개를 A에서 C로 옮기기 시작
hanoi(3, "A", "C", "B");

// 1.	hanoi(3, "A", "C", "B") 호출
// 	•	count가 3이므로, hanoi(2, "A", "B", "C") 호출
// 	•	중간 출력 없음
// 	2.	hanoi(2, "A", "B", "C") 호출
// 	•	count가 2이므로, hanoi(1, "A", "C", "B") 호출
// 	•	중간 출력 없음
// 	3.	hanoi(1, "A", "C", "B") 호출
// 	•	count가 1이므로, hanoi(0, "A", "B", "C") 호출
// 	•	중간 출력 없음 (count가 0이므로 종료)
// 	4.	출력: 원반 1을 A에서 C로 이동!
// 	•	hanoi(0, "B", "C", "A") 호출 (count가 0이므로 종료)
// 	5.	출력: 원반 2을 A에서 B로 이동!
// 	•	hanoi(1, "C", "B", "A") 호출
// 	6.	hanoi(1, "C", "B", "A") 호출
// 	•	count가 1이므로, hanoi(0, "C", "A", "B") 호출
// 	•	중간 출력 없음 (count가 0이므로 종료)
// 	7.	출력: 원반 1을 C에서 B로 이동!
// 	•	hanoi(0, "A", "B", "C") 호출 (count가 0이므로 종료)
// 	8.	출력: 원반 3을 A에서 C로 이동!
// 	•	hanoi(2, "B", "C", "A") 호출
// 	9.	hanoi(2, "B", "C", "A") 호출
// 	•	count가 2이므로, hanoi(1, "B", "A", "C") 호출
// 	•	중간 출력 없음
// 	10.	hanoi(1, "B", "A", "C") 호출
// 	•	count가 1이므로, hanoi(0, "B", "C", "A") 호출
// 	•	중간 출력 없음 (count가 0이므로 종료)
// 	11.	출력: 원반 1을 B에서 C로 이동!
// 	•	hanoi(0, "A", "C", "B") 호출 (count가 0이므로 종료)
// 	12.	출력: 원반 2을 B에서 C로 이동!
// 	•	hanoi(1, "A", "C", "B") 호출
// 	13.	hanoi(1, "A", "C", "B") 호출
// 	•	count가 1이므로, hanoi(0, "A", "B", "C") 호출
// 	•	중간 출력 없음 (count가 0이므로 종료)
// 	14.	출력: 원반 1을 A에서 C로 이동!
// 	•	hanoi(0, "B", "C", "A") 호출 (count가 0이므로 종료)
