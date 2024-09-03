import "./App.css";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer.js";

function App() {
  // const name = "David";
  const BodyProps = {
    name: "David",
    location: "서울시",
    favorList:["파스타","소금빵","떡볶이","피자"]
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      {/* <Body name={name} location={"서울시"} /> */}
      <Footer />
    </div>
  );
}

export default App;
