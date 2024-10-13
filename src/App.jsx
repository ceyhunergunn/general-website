import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Main from "./Sections/Main";
import Portfolio from "./Sections/Portfolio";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import Contact from "./Sections/Contact";
import ResumeButton from "./components/Button/ResumeButton";
import Navbar from "./Sections/Navbar";
import React, { useEffect, useState } from "react";
import Menu from "./Sections/Menu";
import { ThemeContext } from "./Context/ThemeContext";
import sketch from "./assets/character/sketch.png";
import sketchLight from "./assets/character/sketch-light.png";
import bg from "./assets/bg-portfolio.webp";
import bgLight from "./assets/bg-portfolio-light.webp";

function App() {
  const { theme } = React.useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  function changeCSSVariable(variableName, newValue) {
    document.documentElement.style.setProperty(variableName, newValue);
  }
  useEffect(() => {
    if (theme) {
      changeCSSVariable("--menu-bg-color", "#000");
      changeCSSVariable("--sketch-image", `url(${sketch})`);
      changeCSSVariable("--primary-color", "#136870");
      changeCSSVariable("--primary-color-hover", "#2d8088");
      changeCSSVariable("--secondary-color", "#0d0c22");
      changeCSSVariable("--tertiary-color", "#f3f3f4");
      changeCSSVariable("--quaternary-color", "#9e9ea7");
      changeCSSVariable("--quinary-color", "#ffe4f8");
      changeCSSVariable("--primary-text-color", "#fff");
      changeCSSVariable(
        "--bg-gradient",
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      );
      changeCSSVariable("--bg-image", `url(${bg})`);
      changeCSSVariable("--card-bg-color", "rgba(19, 104, 112, 0.5)");
    } else {
      changeCSSVariable("--menu-bg-color", "#0e263d");
      changeCSSVariable("--sketch-image", `url(${sketchLight})`);
      changeCSSVariable("--primary-text-color", "#fff");
      changeCSSVariable("--primary-color", "rgba(163, 217, 226, 0.4)");
      changeCSSVariable("--primary-color-hover", "rgba(163, 217, 226, 0.2)");
      changeCSSVariable("--secondary-color", "#0d0c22");
      changeCSSVariable("--tertiary-color", "#f3f3f4");
      changeCSSVariable("--quaternary-color", "#9e9ea7");
      changeCSSVariable("--quinary-color", "#ffe4f8");
      changeCSSVariable(
        "--bg-gradient",
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`
      );
      changeCSSVariable("--bg-image", `url(${bgLight})`);
      changeCSSVariable("--card-bg-color", "rgba(163, 217, 226, 0.4)");
    }
    //eslint-disable-next-line
  }, [theme]);

  return (
    <div className="App container">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main />
      <Skills />
      <Portfolio />
      <div id="last-section" className="last-section">
        <Contact />
        <Footer />
      </div>
      <ResumeButton />
    </div>
  );
}

export default App;
