import React from 'react';
import './style.css';
import img1 from './imgs/font_img.svg';
import img2 from './imgs/group.svg';
import img3 from './imgs/icon-1.svg';
import img4 from './imgs/left.svg';
import img5 from './imgs/right.svg';
import img6 from './imgs/logo.svg';
import img7 from './imgs/search.svg';
import img8 from './imgs/title_icon1.svg';
import img9 from './imgs/title_icon2.svg';
import img10 from './imgs/title_icon3.svg';
import img11 from './imgs/title_icon4.svg';


class State extends React.Component {
  render() {
    const contain = () => {
      const filter_box = document.querySelector(".filter_box");
      filter_box.classList.toggle("del");
    }
    const menu = () => {
      const filter_box = document.querySelector(".filter_box");
      filter_box.classList.remove("del");
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
                <input className='searchBtn' type='text' placeholder='Search' />
              </div>
            </div>
          </div>
        </section>
        <section className='fon_img'>
          <img className='left' src={ img4 } alt="left" />
          <div className="opacity"></div>
          <div className="title">
            <h1>Skyper Pool Partment</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
            <div className="title_icon">
              <div className="icon">
                <img src={ img8 } alt="title_icon" />
                <p>4 bads</p>
              </div>
              <div className="icon">
                <img src={ img9 } alt="title_icon" />
                <p>5 Baths</p>
              </div>
              <div className="icon">
                <img src={ img10 } alt="title_icon" />
                <p>1 Garage</p>
              </div>
              <div className="icon">
                <img src={ img11 } alt="title_icon" />
                <p>1200 Sq Ft</p>
              </div>
            </div>
            <div className='title_number'>$5,250/mo</div>
            <button>Read more</button>
          </div>
          <img className='fon' src={ img1 } alt="fon" />
          <img className='right' src={ img5 } alt="right" />
          <div className="filter_box">
            <div className="form_container">
              <div className="box_container1">
                <h1>Address</h1>
                <div className="inp_box">
                  <form action="#">
                    <input type="text" placeholder='Country' />
                    <input type="text" placeholder='Region' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='Zip code' />
                  </form>
                </div>
              </div>
              <div className="box_container2">
                <h1>Apartment info</h1>
                <div className="inp_box">
                  <form action="#">
                    <input type="text" placeholder='Rooms' />
                    <input type="text" placeholder='Size' />
                    <input type="text" placeholder='Sort' />
                  </form>
                </div>
              </div>
              <div className="box_container3">
                <h1>Price</h1>
                <div className="inp_box">
                  <form action="#">
                    <input type="text" placeholder='Min price' />
                    <input type="text" placeholder='Max price' />
                  </form>
                </div>
              </div>
            </div>
            <div className="box_footer">
              <button onClick={ menu }>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
        </section>
        <div className="slider_icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}
export default State;