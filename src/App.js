import logo from "./logo.svg";
import "./App.css";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
