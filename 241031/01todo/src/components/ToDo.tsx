import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

import styled from "styled-components";

const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

// const mokup = [
//   {
//     id: 1730427244210,
//     text: "신짱아",
//     category: "TODO",
//   },
//   {
//     id: 1730427242883,
//     text: "신짱구",
//     category: "TODO",
//   },
//   {
//     id: 1730427240155,
//     text: "봉미선",
//     category: "TODO",
//   },
//   {
//     id: 1730427237906,
//     text: "신형만",
//     category: "TODO",
//   },
//   {
//     id: 1730427233570,
//     text: "신형식",
//     category: "TODO",
//   },
// ];

//mango이 값을 gam으로 교체하고 싶다면?
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const target = 1;
// const final = [...food.slice(0, target), "gam", ...food.slice(target + 1)];
// console.log(final);

const ToDo = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("I Wanna go to", event.currentTarget.name);
    const {
      // 이동하고자 하는 값
      currentTarget: { name },
    } = event;
    // 값을 바꿔주는 역할
    // 기존 전체데이터[]를 매개변수로 가져옴
    setToDos((oldToDos) => {
      // 가져온 배열에서 index값을 가져옴
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
