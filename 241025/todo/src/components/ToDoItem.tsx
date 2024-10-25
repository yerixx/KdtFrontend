import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #aaa;
`;
const Label = styled.div`
  font-size: 18px;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label} </Label>
      <Button label={"삭제"} onClick={onDelete} />
    </Container>
  );
};

export default ToDoItem;
