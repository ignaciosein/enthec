 import './App.scss';
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import Count from "../src/components/Count";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div>
         <Count></Count>
         <BrowserRouter>
         <Header></Header>
      <Main></Main>
     
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
