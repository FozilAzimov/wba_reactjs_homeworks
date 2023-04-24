import React from 'react';
import Navbar from '../components/Navbar';
import Filter_Section from '../components/Filter_Section';
import Properties from '../components/Properties';
import Context from '../context';
import { Sticky } from './style';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <Context>
      <Sticky>
        <Navbar />
        <Filter_Section />
      </Sticky>
      <Properties />
      <Footer />
    </Context>
  )
}
