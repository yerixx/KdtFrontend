const username = document.querySelector("#username");
const subject = document.querySelector("#subject");
const submit = document.querySelector("input[type='submit']");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value;
  const subjectValue = subject.value;
  // console.log(usernameValue, subjectValue);

  const table = document.querySelector("table");

  const trItem = table.appendChild("tr");
  const tdItem = trItem.appendChild("td");
});
