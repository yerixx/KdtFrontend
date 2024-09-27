import { useRef, useEffect,useState } from "react";
import {
  motion,
  delay,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { style } from "framer-motion/client";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Source Sans 3", sans-serif;
    background: linear-gradient(135deg, #e09, #d0e);
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction:column;
  gap:20px;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width:200px;
  height:200px;
  background:rgba(255,255,255,1);
  border-radius:40px;
  box-shadow:0 10px 20px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
`
const Buttons = styled.div`
   position:absolute;
   display: flex;
   gap:20px;
   bottom:300px;
`
const Button = styled.button`
  padding:10px 20px;
  border:none;
  border-radius:10px;
  cursor: pointer;
`

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const box = {
  initial:(back: boolean) => ({
    x: back ? -500 : 500,
    opacity:0,
    scale:0,
  }),
  visible:{
    x:0,
    opacity:1,
    scale:1,
    transition:{
      uration:0.5,
    },
  },
  exits:(back: boolean) => ({
    x: back ? 500: -500,
    opacity:0,
    scale:0,
  }),
}

const Appslide = () => {
const [visible, setVisible] = useState(1)
const [back,setBack] = useState(false);

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? boxArray.length : prev - 1))
  }

  const nextPlease = () => {
    setBack(false);
    setVisible((next) => (next === boxArray.length ? 1 : next + 1))
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence mode="wait" custom={back}>
          {boxArray.map((i) => (
            i === visible ? (
            <Box 
            custom={back}
            variants={box} 
            initial="initial" 
            animate="visible" 
            exit="exits" 
            key = {visible} > 
            {visible} 
            </Box>
            ) : null
          ))}
        </AnimatePresence>
        <Buttons>
          <Button onClick={prevPlease}>PREV</Button>
          <Button onClick={nextPlease}>NEXT</Button>
        </Buttons>
      </Wrapper>
    </>
  );
};
export default Appslide;