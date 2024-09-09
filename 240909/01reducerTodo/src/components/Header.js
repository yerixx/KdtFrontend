import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>🗓️ 오늘은</h3>

      {/* new Date() 인스턴스 객체라서 못쓰니까.toDateString문자로 바꿔줌!!!!! 중요  */}
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
