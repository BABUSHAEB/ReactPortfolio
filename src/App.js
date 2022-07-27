import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Certification from './Components/Certification';
import Projects from './Components/Projects';
import Academic from './Components/Academic';
import AboutMe from './Components/AboutMe';
import PageNotFound from './Components/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="skills" element={<Skills />} />
      <Route path="certificate" element={<Certification />} />
      <Route path="projects" element={<Projects />} />
      <Route path="academic" element={<Academic />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
