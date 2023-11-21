import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Watermark from './components/Watermark';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Watermark />
    </div>
  );
}


export default App;
