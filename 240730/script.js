//사용자에게 화씨 온도를 받아서 콘솔창에서 해당 온도를 섭씨 온도로 변환했을 때의 값을 출력해주세요

// 섭씨온도 = (화씨온도 fahrenheit - 32) / 1.8

const fah = parseFloat(prompt("화씨온도를 입력해주세요", "ex.45"));
const cel = ((fah - 32) / 1.8).toFixed(2);

alert(`화씨온도 ${fah}도는 섭씨온도 ${cel}입니다`);
