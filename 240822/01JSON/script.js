const xhr = new XMLHttpRequest();
//인스턴스 객체
//확인하고 싶은 json 데이터를 open("방식","어떤 데이터","불리언값")
//true = 비동기
//false = 동기
xhr.open("GET", "student.json");
// 서버가 존재하지 않기 때문에 send 해주는것
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerText = `${students.name}은 ${students.major}
    학과의 ${students.grade} 학년 입니다!`;
  }
};
