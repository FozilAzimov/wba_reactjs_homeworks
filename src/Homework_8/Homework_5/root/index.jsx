import React from 'react'
import Contact from '../components/Contact'
import Additional from '../components/Additional'
import Price from '../components/Price'
import Location from '../components/Location'
import Media from '../components/Media'
import Context from '../context'
import Amenities from '../components/Amenities'
import Energy from '../components/Energy'

export default function Root2() {
  return (
    <Context>
      <Contact />
      <Additional />
      <Price />
      <Location />
      <Media />
      <Amenities />
      <Energy />
    </Context>
  )
}
