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
const parent=React.createElement("div",
  {id:"parent"},[
  React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"i am h1 tage"),
    React.createElement("h2",{},"i am an h2 tag in"),
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"i am h1 tage"),
    React.createElement("h2",{},"i am an h2 tag in"),
  ])
]);




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
