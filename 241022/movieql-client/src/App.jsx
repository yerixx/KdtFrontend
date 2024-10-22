import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Movies from "./routes/Movies.jsx";
import Movie from "./routes/Movie.jsx";

const GlobalStyle = createGlobalStyle`
${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  ul,li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      { path: "movies/:id", element: <Movie /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
