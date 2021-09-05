import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import "./Main.scss"
import Home from "../../pages/Home/Home"
import Calculator from "../../pages/Calculator/Calculator"
import Count from "../../components/Count/Count";
import Newsletter from "../../components/Newsletter/Newsletter";

const Main = () => {
  return (
    <div>
       <Switch>
       <Route path="/home" component={Home} />
       <Route path="/calculator" component={Calculator} />
       <Route path="/count" component={Count} />
       <Route path="/news" component={Newsletter} />



        </Switch>
 
    </div>
  )
}

export default Main
