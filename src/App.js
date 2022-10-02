import React from "react";
import './App.css';
import Navbar from "./myNavbar";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/about';
import Browse from './pages/browseC';
import MyApp from './pages/MyApp';
import Checkout from './pages/checkout';

import Footer from "./footer";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/configure' element={<MyApp />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>
      </Router>
    <Footer />
    </>
  );
}


export default App;
