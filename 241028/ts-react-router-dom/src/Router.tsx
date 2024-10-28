import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    // children 을 사용하려면 Root.tsx에서 Outlet을 받아야 자식요소에 영향을 받을 수 있음
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
