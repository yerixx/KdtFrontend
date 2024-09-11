import React from 'react'
import CommentListitem from './CommentListitem'
import styled from 'styled-components'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  &*{
  margin-bottom: 16px;
  }
`

const CommentList = ({comments}) => {
//여기 직접 해보기
  return (
    <Wrapper>
      {comments.map((comment)=> {
        return <CommentListitem key={comment.id} comment={comment.content} />
      })}
      </Wrapper>
  )
}

export default CommentList
