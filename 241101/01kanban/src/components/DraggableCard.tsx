import React, { memo } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Card = styled.div`
  background: ${({ theme }) => theme.cardColor};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

interface DraffableCardProps {
  todo: string;
  idx: number;
}

const DraggableCard = ({ todo, idx }: DraffableCardProps) => {
  // 최적화 필요
  console.log(todo);
  return (
    <Draggable key={todo} draggableId={todo} index={idx}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
