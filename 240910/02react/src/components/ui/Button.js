import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
margin:10px;
border:none;
padding:8px 16px;
border-radius:10px;
font-size:14px;
border:1px solid #ccc;
cursor:pointer;
transition: all 0.3s;
  &:hover{
  background:lightgray;
  }
`

const Button = ({ title, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{title || "Button"}</StyledButton>
  )
};

export default Button
