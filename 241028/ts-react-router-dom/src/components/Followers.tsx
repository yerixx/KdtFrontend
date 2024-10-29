import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUsers: string;
}
const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<FollowersContext>();
  // const ctx = useOutletContext();
  // console.log(ctx);
  return <h1>{nameOfMyUsers}의 Followers</h1>;
};

export default Followers;
