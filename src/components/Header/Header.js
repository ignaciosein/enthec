import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../img/logo.png";
import MenuBurger from "../../img/menuburger.png";
const Header = () => {
  const [menu, setMenu] = useState(false);

  const paint = () => {
    if (menu == true) {
      return (
        <div className="menu-list">
          <ul>
          <Link to={"/"}>Inicio</Link>
            <li>Contacto</li>
            <li>Acerca de</li>
            <Link to={"/calculator"}>Calculadora</Link>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="Header">
      <div className="container-header">
        <div className="logo-header">
          <h3>CODE-EXPRESS </h3>
          <img src={Logo}></img>
        </div>
        <div className="menu-burger">
          <img
            onClick={() => {
              setMenu(!menu);
            }}
            src={MenuBurger}
          ></img>
        </div>
      </div>
      {paint()}
    </div>
  );
};

export default Header;
