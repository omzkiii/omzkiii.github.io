import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <div className="page"></div>
    </>
  );
}

export default App;
