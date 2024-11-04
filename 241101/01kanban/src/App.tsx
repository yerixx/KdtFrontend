import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  background: ${({ theme }) => theme.bgColor} ;
  color: #000;
}
`;

const Wrapper = styled.div`
  width: 1000px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

// const toDos = ["a", "b", "c", "d", "e"];

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, draggableId, source }: DropResult) => {
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
        // 이동하고자 하는 보드
        const sourceBorad = [...oldToDos[source.droppableId]];
        const destinationBorad = [...oldToDos[destination?.droppableId]];
        sourceBorad.splice(source.index, 1);
        destinationBorad.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBorad,
          [destination?.droppableId]: destinationBorad,
        };
      });
    }
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((BoardId) => (
              <Board key={BoardId} toDos={toDos[BoardId]} boardId={BoardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default App;
