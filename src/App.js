import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Components/Home-page/Home";
import About from "./Components/About-page/About";
import Navbar from "./Components/Home-page/Navbar";
import Contact from "./Components/Contact-page/Contact-page";
import Team from "./Components/Team-page/Team";

function App() {
  return (
    <div>
    <BrowserRouter> 
    <Navbar />

    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Team" element = {<Team />} />
      <Route path = "/Contact" element = {<Contact />} />
      
    </Routes>
    </BrowserRouter>
   
    </div>
  
  );
}

export default App;
