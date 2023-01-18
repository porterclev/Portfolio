import logo from "./logo.svg";
import "./App.css";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import ProjectTable from "./views/Projects/ProjectTable";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <About />
      <Skills />
      <ProjectTable />
    </div>
  );
}

export default App;
