import React, { useState } from "react";
import styled from "styled-components";

import ToDoInput from "./ToDoInput";
import ShowInputBtn from "./ShowInputBtn";

// interface Props {
//   onAdd: (toDo: string) => void;
// }
const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  //왜 대체 한다고? 다시 공부 필요
  const onClose = () => {
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputBtn
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};

export default InputContainer;
