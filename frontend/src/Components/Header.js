import React from "react";
import "../Css/header.css";
import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";
const Header = (show, setShowhandler) => {
  return (
    <header className="header">
      <div className="header__topLink">
        <Link to="contactUs" className="header__contactus">
          Contact Us
        </Link>
        <img src="/Assets/Icons/sign-in-black.svg" alt="sign in" />
        <img src="/Assets/Icons/cart-black.svg" alt="cart" />
      </div>
      <div className="header__wrapper">
        <img
          className="header__logo"
          src="/Assets/Images/logo-F68F54.jpg"
          alt="Quick Fit Parts"
        />
        <a href="/" className="header__monthlySpecial">
          <img src="/Assets/Icons/calendar.svg" alt="calendar" />
          Monthly Special
        </a>
      </div>
      <div className="header__search">
        <form className="search">
          <input
            className="search__input"
            type="text"
            placeholder="search"
            name="search"
          />
          <img
            className="search__img"
            alt="search"
            src="/Assets/Icons/Search.svg"
          />
        </form>
      </div>
      <nav className="header__navbar">
        <TopMenu onClick={setShowhandler} />
      </nav>
    </header>
  );
};

export default Header;
