//콜백지옥
const displayLetter = () => {
  console.log("a");
  setTimeout(() => {
    console.log("b");
    setTimeout(() => {
      console.log("c");
      setTimeout(() => {
        console.log("d");
        setTimeout(() => {
          console.log("stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();
