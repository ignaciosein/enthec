import React ,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import Newsletter  from '../../components/Newsletter/Newsletter';
import "./Home.scss"
const cookies = new Cookies();


const Home = () => {

  const [cookie,setCookie] = useState("")
  
  useEffect(() => {
   
    let galleta =cookies.get('news');

    if(galleta==undefined){
 
 /*     alert("no existe cookie") */
    /*  cookies.set("news","true")
     setCookie(false) */
 
    }
    else {
       
/*    alert("existe cookie") */
  
 
    }


  }, [ ])
  

    


  return (
    <div className="Home">
      {cookie==false ? <Newsletter/> : ""}
     <div className="container-home">

<h1></h1>
<p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </div>
    </div>
  )
}

export default Home
