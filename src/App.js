import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Main from "./Sections/Main";
import Portfolio from "./Sections/Portfolio";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";
import ResumeButton from "./components/Button/ResumeButton";
import Navbar from "./Sections/Navbar";
import { useState } from "react";
import Menu from "./Sections/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App container">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main />
      <Portfolio />
      <div className="last-section">
        <Contact />
        <Footer />
      </div>
      <ResumeButton />
    </div>
  );
}

export default App;
