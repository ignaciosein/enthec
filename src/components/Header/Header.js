import React from 'react'
import "./Header.scss"
import Logo from "../../img/logo.png"
import MenuBurger from "../../img/menuburger.png"
const Header = () => {
  return (
    <div className="Header">
  
      <div className="container-header">
        <div className="logo-header">
        <h3>CODE-EXPRESS </h3> 
          <img src={Logo}></img>
        </div>
        <div className="menu-burger">
          <img src={MenuBurger}></img>
        </div>
      </div>
      <div className="menu-list">
          <ul>
    <li>HOME</li>
    <li>CONTACT</li>
    <li>ABOUT</li>

    <li>PRICING</li>



          </ul>

        </div>

    </div>
  )
}

export default Header
