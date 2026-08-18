
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestroCard from "./components/RestroCard";
import About from "./components/About";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Contact from "./components/Contact";


const AppLayout = () => {

  return (
    <div className="app">

      <Header />

      <Body />

    </div>
  );
};

//router:

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);
  


// React Root
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<RouterProvider router={appRouter} />);