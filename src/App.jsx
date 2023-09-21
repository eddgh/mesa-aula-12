import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Contact from './Contact';
import Beer from './Beer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home'); 
  },[])

  return (
    <main>
      <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beer/:id" element={<Beer />} />
      </Routes>
    </main>
  );
}

export default App;
