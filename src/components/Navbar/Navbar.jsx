import React from "react";
import CartWidget from "../cartWidget.jsx/CartWidget";
import "./navbar.css";
import Logo from "../../assets/multimedia/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="barra-nav">
        <div className="cont-logo">
          <img src={Logo} className="logo"></img>
        </div>
        <ul className="shop">
          <li>
            <a href="shop">SHOP</a>
          </li>
          <li>
            <a href="about">ABOUT</a>
          </li>
          <li>
            <a href="contact">CONTACT</a>
          </li>
        </ul>
        <ul className="sing-in">
          <li>
            <a href="sing-in">SING-IN</a>
          </li>
        </ul>
        <div className="cart">
          <a href="cart">
            <CartWidget />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
