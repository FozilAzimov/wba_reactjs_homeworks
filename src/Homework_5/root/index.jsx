import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Additional from '../components/Additional'
import Price from '../components/Price'
import Location from '../components/Location'
import Media from '../components/Media'
import Footer from '../components/Footer'
import Context from '../context'
import Amenities from '../components/Amenities'
import Energy from '../components/Energy'

export default function Root() {
  return (
    <Context>
      <Navbar />
      <Contact />
      <Additional />
      <Price />
      <Location />
      <Media />
      <Amenities />
      <Energy />
      <Footer />
    </Context>
  )
}
