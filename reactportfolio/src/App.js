import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import { useState } from "react";
import "./app.scss"



function App() {

  //makes menu closed on load so animation doesnt start
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className = "sections">
        <Intro />
        <Portfolio />
        <Contact />

      </div>
    </div>
  );
}

export default App;
