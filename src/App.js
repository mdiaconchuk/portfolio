import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Watermark from './components/Watermark';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects'
import Portfolio from './components/Portfolio';

function App() {
  
  return (
    <div className="App">
      <ParticlesBackground/>
      <Routes>
        <Route path="/portfolio/home" element={<Portfolio />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
      <Watermark />
    </div>
  );
}


export default App;
