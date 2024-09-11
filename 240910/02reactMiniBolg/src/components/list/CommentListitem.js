import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width:calc(100% - 32px);
border:1px solid #ccc;
border-radius:8px;
margin-bottom:20px;
padding:20px;
cursor:pointer;
background:#fff;
transition: all 0.3s;
&:hover{
background:lightgray;
}
`

const CommentListitem = ({comment}) => {
  return (
       <Wrapper>{comment}</Wrapper>
  )
}

export default CommentListitem
