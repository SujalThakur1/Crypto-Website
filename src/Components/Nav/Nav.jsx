import React from "react";
import "./Nav.css";
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header>
      <nav className="navbar">
        <Link to={"./"}>
          <img src={Logo} alt="error" />
        </Link>
        <div className= {isOpen?"Hero2":"Hero"}>
          <ul>
            <Link to={"./"}>
              <li>Home</li>
            </Link>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav-right">
          <select name="" id="">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
          <button>
            Sign up{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2223/2223606.png"
              alt=""
              style={{ maxWidth: "15px" }}
            />
          </button>
        </div>
        <div className={isOpen ? "menu" : "menu-open"}>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "𓃑" : "✘"}
          </button>
        </div>
      </nav>
    </header>
  );
}
