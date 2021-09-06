import React ,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import Newsletter  from '../../components/Newsletter/Newsletter';
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
    <div>
      {cookie==false ? <Newsletter/> : ""}
     
    </div>
  )
}

export default Home
