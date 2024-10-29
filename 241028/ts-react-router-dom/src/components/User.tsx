import React from "react";
// 파라미터 값 찾아오는 useParams
import { useParams, Outlet } from "react-router-dom";
import { users } from "../db";
import { Link } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  console.log(userId);
  // const params = useParams();
  // console.log(params);

  return (
    <>
      <h1>user id : {userId}</h1>
      <h1>user name : {users[Number(userId) - 1].name}</h1>
      <hr />
      {/* 상대경로 = 부모요소의 경로 그대로 흡수 */}
      <Link to={"followers"}>See Followers</Link>
      {/* 절대경로 = 부모요소의 주소 없이 새로 만듦*/}
      {/* <Link to={"/followers"}>See Followers</Link> */}
      <Outlet context={{ nameOfMyUsers: users[Number(userId) - 1].name }} />
    </>
  );
};

export default User;
