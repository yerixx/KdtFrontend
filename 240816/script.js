const button = document.querySelector("#tweetButton");
// console.log(button);

button.addEventListener("click", () => {
  //  받은 값 뒤에 해쉬태그를 달고 싶어서 let 사용
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #david #sns #js`;
  // console.log(tweetText);

  //인코딩
  const encodedText = encodeURIComponent(tweetText);
  // console.log(encodedText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL);
});
