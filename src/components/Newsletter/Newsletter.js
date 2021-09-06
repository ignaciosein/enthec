import React, { useState, useEffect } from "react";

import "./Newsletter.scss";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [showMail, setShowMail] = useState("");

  const handleSubmit = (e) => {
    setMail(e.target.value);
    e.preventDefault();
  };

  const submit = () => {

    let test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(mail)

  

    if (test) {
      setShowMail(true);
    } else {
      setShowMail(false);
      /* setShowMail("fail")   */
    }
  };

  const message = () => {
    if (mail === "") {
      return ` `;
    } else if (showMail) {
      return `Te has suscrito con éxito con el email : ${mail}`;
    } else if (showMail == "fail") {
      return `Introduce un email válido`;
    } else if (showMail === false) {
      return `Introduce un email válido`;
    }
  };

  console.log(showMail);
  return (
    <div className="Newsletter">
      <p>
        <h3>
          Únete a nosotros para estar a la última de los próximos descuentos de
          la compañía
        </h3>
      </p>

      <label>
        {" "}
        <h2>Introduce tu Email</h2>
      </label>

      <input name="email" type="email" required onChange={handleSubmit}></input>

      <button onClick={() => submit()} type="submit">
        Subscribirse
      </button>

      <p className="info">{message()}</p>
    </div>
  );
};

export default Newsletter;
