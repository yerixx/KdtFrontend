import React, { memo } from "react";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

const Container = styled.div`
  background: ${({ theme }) => theme.boardColor};
  border-radius: 8px;
  padding: 30px 10px 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  return (
    <Container>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((todo, idx) => (
              <DraggableCard key={todo} todo={todo} idx={idx} />
            ))}
            {magic.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </Container>
  );
};

export default React.memo(Board);
