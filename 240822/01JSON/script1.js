const xhr = new XMLHttpRequest();

//GET방식 :
//POST방식 : 댓글, 로그인페이지
//값을 전달 하고 전달 된 값이 업데이트 되는 것
xhr.open("GET", "student1.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student1 = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `
    <h1>${student1.name}</h1>
    <ul>
    <li>전공 : ${student1.major}</li>
    <li>학년 : ${student1.grade}</li>
    </ul>
    `;
  }
};
