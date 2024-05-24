import "./App.css";
import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Vasanth from "./components/Vasanth";

function App() {
  return (
    <div className="App font-sizez">
      <Header />
      <Vasanth />
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
