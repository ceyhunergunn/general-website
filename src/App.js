import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Main from "./Sections/Main";
import Portfolio from "./Sections/Portfolio";

function App() {
  return (
    <div className="App ">
      <Main />
      <Portfolio />
    </div>
  );
}

export default App;
