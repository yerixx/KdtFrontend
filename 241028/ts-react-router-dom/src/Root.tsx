import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      {/* Outlet을 받아야 자식요소에 영향을 받을 수 있음 */}
      <Outlet />
    </div>
  );
};

export default App;
