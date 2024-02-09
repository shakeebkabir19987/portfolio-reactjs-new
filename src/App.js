import React from 'react'; 
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
// import Project from "./routes/Project";
import Skill from './pages/Skill';
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
   <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </>
  );
}

export default App;
