const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#userEmail");

  if (email.value !== "") {
    //@을 중심으로 0번 // 1번
    let userName = email.value.split("@")[0];
    userName = userName.slice(0, 2);
    const domain = email.value.split("@")[1];
    document.querySelector("#result").innerText = `${userName}***@${domain}`;
    email.value = "";

    console.log(userName, domain);
  }
});
