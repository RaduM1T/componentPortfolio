import { useState } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import { Route,Routes } from 'react-router-dom'; 
import Home from './home/Home';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
     <div className="appContainer"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
     </>
  );
}

export default App