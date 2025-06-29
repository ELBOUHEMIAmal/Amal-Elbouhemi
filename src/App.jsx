import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Works from './pages/Works'
import About from './pages/About';
import Skills from './pages/Skills';
import WhoAmI from './pages/WhoAmI';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import EmailForm from './components/EmailForm';
import { AnimatePresence } from "framer-motion";





function App() {
    const location = useLocation();
// const [bgColor, setBgColor] = useState('');
  return (
    <>  
     <div className='body'>
    <Navbar />
    <AnimatePresence mode="wait">

     <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home  />} />
          <Route path="/works" element={<Works  />} />
          <Route path="/about" element={<About  />} />
          <Route path="/skills" element={<Skills  />} />
          <Route path="/whoAmI" element={<WhoAmI  />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/emailForm" element={<EmailForm />} />

          
          
        </Routes>
    </AnimatePresence>
    </div>
    </>
  )
}

export default App
