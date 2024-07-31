let arr = [];
let userNumber;

for (let i = 0; i < 3; i++) {
  userNumber = parseInt(prompt("100이하의 자연수를 입력해주세요"));
  arr.push(userNumber);
}
const [num1, num2, num3] = arr;
const minValue = Math.min(...arr);

if (isNaN(userNumber) || userNumber > 100) {
  alert("100이하의 자연수를 다시 입력해주세요");
} else if (userNumber <= 100) {
  alert(`입력하신 2개의 자연수중 가장 작은 값은 ${minValue}입니다`);
}
