


//React Component:functional
//both are same when u are not wirte return not {} i arrow function:
//this components compostion:
import React from "react";
import ReactDOM from "react-dom/client";

const ele=<span>React Element</span>
// React Element
 const title =(
   <h1 className="heading">
    {ele}
    Namaste react using jsx</h1>
   
);


// Functional Component
const Titlecomponent = () => {
  return <h1 className="heading">Namaste react using jsx</h1>;
};

// Component Composition
const Headingcomponen2 = () => (
  <div id="container">
    <h2>Harsh Maurya</h2>
     //both are same:
    <Titlecomponent/> 
    <Titlecomponent></Titlecomponent>
    {Titlecomponent()}

    <h1 className="heading">
      Namaste React Functional Component
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponen2/>);