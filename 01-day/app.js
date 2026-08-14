/**
 * 
 * <div id="parent">
 *    <div id="cild">
 *      <h1>i am h1 tage</h1>
 *      <h1>i am h1 tage</h1>
 *      </div>
 *  </div>
 *      
 * 
 * 
 * 
 */

///JSX:lot of people thning react is only return using jsx: are make are life are easy when we have to create tag

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [
        React.createElement("h1", { key: "heading1" }, "i am h1 tag"),
        React.createElement("h2", { key: "heading2" }, "i am an h2 tag")
      ]
    ),

    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { key: "heading3" }, "i am h1 tag"),
        React.createElement("h2", { key: "heading4" }, "i am an h2 tag")
      ]
    )
  ]
);



// // it is use /react.development.js
// const  heading=React.createElement(
//   "h1",
//   {},
//   "hello world!"
// );
// console.log(heading);// object return 


//       // its is inside the browser:
//       const root =ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);
 
console.log(parent);// object return 


      // its is inside the browser:
      const root =ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);
