import React, { Component } from 'react';


import Fon_Section from '../components/Fon_Section';
import Recommended from '../components/Recommended_Section';
import ToChoose from '../components/toChoose_Section';
import Category from '../components/Category_Section';
import ImgSlider from '../components/Img_Slider';
import Rent from '../components/Rent_Section';
import Testimonials from '../components/Testimonials_Section';




export default class Root1 extends Component {
  render() {
    return (
      <>
        <Fon_Section />
        <Recommended />
        <ToChoose />
        <Category />
        <ImgSlider />
        <Rent />
        <Testimonials />
      </>
    )
  }
}
