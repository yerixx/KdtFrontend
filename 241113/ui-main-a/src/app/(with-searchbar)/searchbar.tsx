//클라이언트라고 설명해줘야 알아먹음
"use client";
import React, { useState } from "react";

const Searchbar = () => {
  const [search, setState] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
};

export default Searchbar;
