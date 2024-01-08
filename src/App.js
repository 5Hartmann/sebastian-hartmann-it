import React from 'react';
import './App.css';
import Navbar from './tamplates/elements/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './tamplates/Sites/Home';
import About from './tamplates/Sites/About';
import CV from './tamplates/Sites/CV';
import Kontakt from './tamplates/Sites/Kontakt';
import Footer from './tamplates/elements/Footer';
import MobileNav from './tamplates/elements/MobileNav.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <Navbar></Navbar>
        </div>
        <div className='headerMobile'>
          <MobileNav></MobileNav>
        </div>


      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/CV' element={<CV />} />
          <Route path='/kontakt' element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
