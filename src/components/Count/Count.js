import React,{useEffect} from 'react'
import "./Count.scss"

const Count = () => {


    useEffect(() => {
 timer()
    }, [ ])

 const timer =()=>{

    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

 
let x = setInterval(function() {

 
  let now = new Date().getTime();
    
 
  let distance = countDownDate - now;
    
 
 
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("counter").innerHTML =   hours + "h "
  + minutes + "m " + seconds + "s ";
    
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
 }



  return (
    <div className="Count">
        <p className="discount">40% de descuento con el código FREEWORLWIDE</p>
        <p className="offer">Quedan <label id="counter"></label> para que finalice la oferta</p> 

    </div>
  )
}

export default Count
