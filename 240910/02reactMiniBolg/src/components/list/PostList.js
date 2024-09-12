import React from 'react'
import styled from 'styled-components'
import PostListItem from './PostListItem'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`



const PostList = ({posts,onClickItem}) => {
  // console.log(posts)
  return (
    <Wrapper>
      {/* //부모가 자식한테 보낼때 자식은 꼭!! 키 값을 가지고 있어야함 */}
      {posts.map((post)=>(
        <PostListItem key={post.id} post={post} onClick={()=>onClickItem(post)}/>
        )
      )}
      </Wrapper>
  )
}

export default PostList
