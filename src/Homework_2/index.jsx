import React from 'react';
import './style.css';
import img1 from './imgs/font_img.svg';
import img2 from './imgs/group.svg';
import img3 from './imgs/icon-1.svg';
import img4 from './imgs/left.svg';
import img5 from './imgs/right.svg';
import img6 from './imgs/logo.svg';
import img7 from './imgs/search.svg';

class State extends React.Component {
  render() {
    const contain = () => {
      const filter_box = document.querySelector(".filter_box");
      filter_box.classList.toggle("del");
    }
    return (
      <div className="parent">
        <nav className='navbar'>
          <div className="container">
            <div className="box">
              <div className="nav_item">
                <a href="#"><img src={ img6 } alt="logo" /></a>
                <a className="logo" href="#" ><h1>Houzing</h1></a>
              </div>
              <div className="nav_item">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Properties</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
              </div>
              <div className="nav_item">
                <a className='login' href="#">Login</a>
              </div>
            </div>
          </div>
        </nav>
        <section className='search'>
          <div className="container">
            <div className="box">
              <div className="bir">
                <img className='img_icon1' src={ img3 } alt="img" />
                <input className='inp1' type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' />
              </div>
              <div className="ikki">
                <img className='img_icon2' src={ img2 } alt="" />
                <input onClick={ contain } className='btn' type="submit" value={ "Advenced" } />
              </div>
              <div className="uch">
                <img className='img_icon3' src={ img7 } alt="search" />
                <input className='searchBtn' type='text' value={ "Search" } />
              </div>
            </div>
          </div>
        </section>
        <section className='fon_img'>
          <img className='left' src={ img4 } alt="left" />
          <div className="opacity"></div>
          <img className='fon' src={ img1 } alt="fon" />
          <img className='right' src={ img5 } alt="right" />
          <div className="filter_box">

          </div>
        </section>
      </div>
    )
  }
}
export default State;