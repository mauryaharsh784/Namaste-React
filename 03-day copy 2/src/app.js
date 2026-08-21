import "../index.css";
import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import RestroCard from "./components/RestroCard";

//lazy are used to import the componets the compnents after open the netwok see js file code  are re spreate and diff moudule 
const  About=lazy(() => import("./components/About")); 
const Grocery=lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  return (
    <div className="app">

      <Header />
      <Outlet/>

    </div>
  );
};

//router:

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
          element:<Suspense
         fallback={
         <h1>Loading..</h1>}>
          <About />
          </Suspense>,
          
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense 
        fallback={
        <h1>Loading...</h1>}>
          <Grocery />
        </Suspense>,
        

      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);