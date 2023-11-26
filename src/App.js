import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Watermark from './components/Watermark';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects'
import Portfolio from './components/Portfolio';
import ToStart from './components/ToStart';

function App() {
  
  return (
    <div className="App">
      <ParticlesBackground/>
      <Routes>
        <Route path="/portfolio/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}


export default App;
