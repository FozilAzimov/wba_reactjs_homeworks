import React from 'react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Info from '../components/Info';


export default function Root() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Info />
    </>
  )
}
