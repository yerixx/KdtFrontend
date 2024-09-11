import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'
import CommentList from '../list/CommentList'
import styled from 'styled-components'
import data from "../../data.json"

const Wrapper = styled.div`
  width:calc(100% - 32px);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
  margin:0 auto;
  padding:16px;
`
const Container = styled.div`
  width:100%;
  max-width:720px;
`
const PostContainer = styled.div`
  border:1px solid #ccc;
  border-radius:8px;
  padding: 8px 16px;
`
const TitleText = styled.p`
  font-size:28px;
  font-weight:500;
`
const ContentText = styled.p`
  font-size:20px;
  line-height:32px;
  `
const CommentLabel = styled.p`
  font-size:16px;
  font-weight:500;
  `

const PostviewPage = () => {
  const navigate = useNavigate();
  const {postId} = useParams();
  //타입이 다ㅏ르다
  const post = data.find((item)=> {
  return item.id == postId
})
console.log(post)
  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={()=> navigate("/")}/>
          <PostContainer>
            <TitleText>{post.title}</TitleText>
            <ContentText>{post.content}</ContentText>
          </PostContainer>
          <CommentLabel>댓글</CommentLabel>
          <CommentList comments={post.comments}/>
        <TextInput height={40}/>
        <Button title="댓글 작성하기" onClick={()=>navigate("/")}/>
      </Container>
    </Wrapper>
  )
}

export default PostviewPage
