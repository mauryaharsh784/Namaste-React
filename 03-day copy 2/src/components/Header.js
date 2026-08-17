import { LOGO_URL } from "../utills/constants";
import { useState } from "react";
const Header = () => {
  

  const [btnNameReact,setBtnNameReact]=useState("Login");
  console.log("header is render");
  
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
          className="login" 
          onClick={() => {
              btnNameReact==="Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;