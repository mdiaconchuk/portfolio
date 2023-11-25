import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Watermark from './components/Watermark';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  
  return (
    <div className="App">
      <ParticlesBackground/>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/home" element={<Home />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
      <Watermark />
    </div>
  );
}


export default App;
