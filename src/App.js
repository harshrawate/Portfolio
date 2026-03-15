import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import PortfolioMain from "./components/PortfolioMain";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 min-h-screen">
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <PortfolioMain/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
