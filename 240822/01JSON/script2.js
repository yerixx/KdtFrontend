const xhr = new XMLHttpRequest();

xhr.open("GET", "./student2.json", "true");
xhr.send();

const renderHTML = (students) => {
  let output = "";
  for (let student of students) {
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ul>
    <hr/>
    `;
  }
  const result = document.querySelector("#result");
  result.innerHTML = output;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    //양이 많아질때 리팩토링 사용
    renderHTML(students);
  }
};
