import React from "react";
import styled from "styled-components";

interface ContainerProps {
  color: string;
}
//스타일 컴포넌트를 외부에서 전달받아서 props 로 주었다면 스타일 컴포넌트도 타입 정의 필요!
const Container = styled.button<ContainerProps>`
  border: none;
  background: ${({ color }) => color};
  color: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ color }) => color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgb(0, 0, 0, 0.1);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
