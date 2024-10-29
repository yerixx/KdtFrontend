import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  //이름은 바껴도 되지만 순서는 바뀔 수 없음
  const [readSearchParams, setSearchParams] = useSearchParams();
  // boolean 값으로 있는지 없는지 확인..has
  // console.log(readSearchParams.has("geo"));
  //값을 가져오는..get
  // console.log(readSearchParams.get("geo"));

  setTimeout(() => {
    // 특정 쿼리 값을 만들어 넣을 수 있음
    setSearchParams({ day: "today", tomorrow: "241030" });
  }, 3000);

  return (
    <ul>
      {
        // 객체 안에 있는 배열을 쓰기 위해
        users.map((user) => (
          <li key={user.id}>
            {/* 파라미터를 사용하여 각 아이디에 맞는 페이지로 이동 */}
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default Home;
