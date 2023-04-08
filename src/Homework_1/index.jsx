import React from "react";
import Card from "./card";
import img1 from './imgs/rasm10.svg';
import img2 from './imgs/rasm9.svg';
import img3 from './imgs/rasm8.svg';
import img4 from './imgs/rasm11.svg';
import img5 from './imgs/rasm14.svg';
import img6 from './imgs/rasm4.svg';
import img7 from './imgs/rasm5.svg';
import img8 from './imgs/rasm6.svg';
import img9 from './imgs/rasm13.svg';
import img10 from './imgs/rasm14.svg';
import img11 from './imgs/rasm3.svg';
import img12 from './imgs/rasm7.svg';
import img13 from './imgs/rasm1.svg';
import img14 from './imgs/rasm2.svg';

class Section extends React.Component {
  render() {
    return (
      <section className="recommended">
        <h1 className="title">Recommended</h1>
        <p className="title-text">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
        <div className="container">
          <span className="left-icon">
            <img src={ img4 } alt="left-icon" />
          </span>
          <div className="card-img">
            <Card data={ { img: img1, imgB: img6, icon1: img9, icon2: img10, icon3: img11, icon4: img12, cardIcon1: img13, cardIcon2: img14 } } />
            <Card data={ { img: img2, imgB: img7, icon1: img9, icon2: img10, icon3: img11, icon4: img12, cardIcon1: img13, cardIcon2: img14 } } />
            <Card data={ { img: img3, imgB: img8, icon1: img9, icon2: img10, icon3: img11, icon4: img12, cardIcon1: img13, cardIcon2: img14 } } />
          </div>
          <span className="right-icon">
            <img src={ img5 } alt="right-icon" />
          </span>
        </div>
        <div className="nuqta">
          <div></div>
          <div className="point"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    )
  }
}

export default Section;
