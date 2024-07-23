const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
// console.log(menuHome, menuGame, menuJukebox);
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  // console.log("home");/
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #55b2e4";
  menuGame.style = "none";
  menuJukebox.style = "none";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuGame.style = "background: #fff; color: #55b2e4";
  menuHome.style = "none";
  menuJukebox.style = "none";
};
const juckboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuJukebox.style = "background: #fff; color: #55b2e4";
  menuGame.style = "none";
  menuHome.style = "none";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", juckboxChange);
