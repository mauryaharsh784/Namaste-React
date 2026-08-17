
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestroCard from "./components/RestroCard";
/**
 * Header
 * -logo
 * -Nav Item
 * Body
 * -Search
 * -RestructureContainer
 * --restro card
 * ---img
 * ----Name of res star rating 
 * Footer
 * 
 * -Link
 * -Address
 * -Contact
 */

// Main App Component
const AppLayout = () => {

  return (
    <div className="app">

      <Header />

      <Body />

    </div>
  );
};


// React Root
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<AppLayout />);