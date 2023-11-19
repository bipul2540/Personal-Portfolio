import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsCanvas from "./canvas/Stars";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About name="about" />
          <Experience />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
