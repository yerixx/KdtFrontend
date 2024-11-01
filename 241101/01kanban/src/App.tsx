import { useRecoilState, useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import { hourSelector, minuteState } from "./components/atoms";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  body{
      font-family: "Do Hyeon", sans-serif;
  }
`;

const App = () => {
  const hours = useRecoilValue(hourSelector);
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //숫자로 형변환
    setMinutes(+event.currentTarget.value);
  };
  return (
    <>
      <GlobalStyle />
      <div>
        <input
          onChange={onMinutesChange}
          type="number"
          placeholder={"Minutes"}
          value={minutes}
        />
        <input value={hours} type="number" placeholder="Hours" />
      </div>
    </>
  );
};

export default App;
