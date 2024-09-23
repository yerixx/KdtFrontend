import styled from "styled-components";
import MainPage from "./components/page/MainPage";
import PostWritePage from "./components/page/PostWritePage";
import PostviewPage from "./components/page/PostviewPage";



// 페이지 분기를 위한 송전탑 BrowserRouter // 형제 Routes,Route
import { BrowserRouter, Routes,Route } from "react-router-dom";

const MainTitleText = styled.div`
  background:pink;
  color:#fff;
  font-size:2rem;
  text-align:center;
  font-weight:bold;
  padding:20px;
`;


function App() {
  return (
  <BrowserRouter>
      <MainTitleText>
        Blog
      </MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/post-write" element={<PostWritePage />}/>
        <Route path="/post/:postId" element={<PostviewPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
