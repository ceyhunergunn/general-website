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

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Main />
      <div className="last-section">
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <ResumeButton />
    </div>
  );
}

export default App;
