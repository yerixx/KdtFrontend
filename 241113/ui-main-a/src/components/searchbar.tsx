//클라이언트라고 설명해줘야 알아먹음
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const [search, setState] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={search} type="text" onChange={onChangeSearch} />
        <input type="submit" value={"검색"} />
      </form>
    </div>
  );
};

export default Searchbar;
