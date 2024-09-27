import { useRef } from "react";
import { motion } from "framer-motion"
import { createGlobalStyle,styled } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
  }
  body{
    font-family: "Source Sans 3", sans-serif;
    background:linear-gradient(134deg,#e09,#d0e);
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;
const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BiggerBox = styled.div`
width:600px;
height:600px;
background:rgba(255,255,255,0.2);
border-radius:30px;
overflow:hidden;
display: flex;
justify-content: center;
align-items: center;
`

//styled-component에 framer.motion 적용 방법
const Box = styled(motion.div)`
  width:200px;
  height:200px;
  /* background: rgba(0,0,0,0.3); */
  background: #fff;
  border-radius:30px;
  box-shadow:0 10px 20px rgba(0,0,0,0.1);
`


const boxVariants = {
  hover:{
    scale:2, 
    rotateZ:90
  },
  click:{
    scale:1, 
    borderRadius:"100px",
  },
};


const App03 = () => {
  const biggerBoxRef= useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef)
  return (
    <>
      <GlobalStyles/>
       <Wrapper>
        {/* drag="x" */}
       <BiggerBox ref={biggerBoxRef}>
        {/* dragSnapToOrigin 박스 밖으로 나가도 가운데로 돌아오게  // dragElastic 탄성 */}
          <Box drag dragSnapToOrigin dragElastic={1} dragConstraints={biggerBoxRef} variants={boxVariants} whileHover={"hover"} whileTap={"click"}/>
        </BiggerBox>
      </Wrapper>
    </>
  )
};

export default App03
