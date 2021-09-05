import React, { useState, useEffect } from "react";
 
import "./Newsletter.scss";
const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [showMail, setShowMail] = useState(false);

  const handleSubmit = (e) => {
    setMail(e.target.value);
    e.preventDefault();
  };

  const submit = () => {
    setShowMail(true);
  };

  return (
    <div className="Newsletter">
      <p>
       <h3>Únete a nosotros para estar a la última de los próximos descuentos de la
        compañía</h3> 
      </p>

     
      <label>
        {" "}
        <h2>Introduce tu Email</h2>
      </label>
      <input name="email" type="email" required onChange={handleSubmit}></input>

      <button onClick={() => submit()} type="submit">
        Subscribirse
      </button>
     
     <p className="info">{showMail ? `Te has suscrito con éxito con el email : ${mail}` : ""}</p> 
    </div>
  );
};

export default Newsletter;
