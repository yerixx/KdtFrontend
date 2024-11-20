import React, { ReactNode } from "react";
import Searchbar from "../../components/searchbar";
//search 하위 요소에 영향을 줌
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default Layout;
