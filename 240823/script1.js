// fetch("https://dummyjson.com/quotes")
//   .then((Response) =>
//     Response.json().then((json) => {
//       let output = "";
//       const quote = document.querySelector(".quote");
//       const author = document.querySelector(".author");
//       console.log(quote, author);
//     })
//   )
//   .catch((err) => console.log(`${err}`));

const quoteURL = "https://dummyjson.com/quotes";

//메서드체이닝기법
fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = `- ${data.quotes[random].author}`;
  })
  .catch((err) => console.log(err));
