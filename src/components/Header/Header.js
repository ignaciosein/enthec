import React,{useState, useEffect} from 'react'
import "./Header.scss"
import Logo from "../../img/logo.png"
import MenuBurger from "../../img/menuburger.png"
const Header = () => {

  const [menu, setMenu] = useState(false)

 
 
/* const menuBurger = (estado) =>{
 
  if(estado){

 
    alert("se muestra menu")
  }
  else{

 alert("se oculta estado")

  }

} */
 
 const paint=()=> `<div className="menu-list">
  <ul>
  <li>HOME</li>
  <li>CONTACT</li>
  <li>ABOUT</li>
    <li>PRICING</li>
   </ul>
    </div>`
 


console.log(menu)

  return (
    <div className="Header">
  
      <div className="container-header">
        <div className="logo-header">
        <h3>CODE-EXPRESS </h3> 
          <img  src={Logo}></img>
        </div>
        <div className="menu-burger">
          <img onClick={ ()=> { setMenu(true)}} src={MenuBurger}></img>
        </div>
      </div>
     {menu==true? 
     paint(): ""}

    </div>
  )
}

export default Header
