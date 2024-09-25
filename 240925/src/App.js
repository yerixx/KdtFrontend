import './App.css';
// import styled from 'styled-components';
import styled,{css} from 'styled-components';

// const baseShadow = `box-shadow: 0 10px 6px #777`

// const Container = styled.div`
// font-size:2rem;
// width: 50%;
// background:#ccc;
// margin:0 auto;
// padding:10px,20px;
// ${baseShadow}
// `

const baseShadow = css`
  box-shadow: ${({ color }) => `0 16px 6px ${color || "red"}`};
`;
const font = ({color, size, family})=> `
color: ${color||"red"}
font-size: ${size || "1rem"}
font-family: ${family || "serif"}
`
const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
  ${font({color:"green", size:"2rem"})}
`;
function App() {
  return (
    <div className="App">
      <Container color={"orange"}>styled-components</Container>
    </div>
  );
}

export default App;
