import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}


export default App;
