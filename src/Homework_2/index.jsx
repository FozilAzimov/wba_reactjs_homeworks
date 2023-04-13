import React from 'react';
import './style.css';
import { data } from './data';
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
  state = {
    data,
  }
  filter = {};
  render() {
    const contain = () => {
      const filter_box = document.querySelector(".filter_box");
      filter_box.classList.toggle("del");
    }
    const menu = () => {
      const filter_box = document.querySelector(".filter_box");
      filter_box.classList.remove("del");
    }
    const change = ({ target: { value, name } }) => {
      let info = data;
      this.filter[name] = value;

      Object.entries(this.filter).forEach(([key, value]) => {
        info = info.filter((item) => {
          return item[key].toString().toLowerCase().includes(value.toLowerCase())
        });
      });
      this.setState({ data: info });
    }
    return (
      <div className="parent" >
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
                    <input name='country' onChange={ change } placeholder='Country' type="text" />
                    <input name='region' onChange={ change } placeholder='Region' type="text" />
                    <input name='city' onChange={ change } placeholder='City' type="text" />
                    <input name='zipCode' onChange={ change } placeholder='Zip code' type="text" />
                  </form>
                </div>
              </div>
              <div className="box_container2">
                <h1>Apartment info</h1>
                <div className="inp_box">
                  <form action="#">
                    <input name='rooms' onChange={ change } placeholder='Rooms' type="text" />
                    <input name='size' onChange={ change } placeholder='Size' type="text" />
                    <input name='sort' onChange={ change } placeholder='Sort' type="text" />
                  </form>
                </div>
              </div>
              <div className="box_container3">
                <h1>Price</h1>
                <div className="inp_box">
                  <form action="#">
                    <input name='minPrice' onChange={ change } placeholder='Min price' type="text" />
                    <input name='maxPrice' onChange={ change } placeholder='Max price' type="text" />
                  </form>
                </div>
              </div>
            </div>
            <div className="box_footer">
              <button onClick={ menu }>Cancel</button>
              <button>Submit</button>
            </div>
          </div>
          <div className="slider_icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        {
          <table border={ 1 } >
            <thead>
              <tr>
                <th>ID</th>
                <th>Country</th>
                <th>Region</th>
                <th>Zip code</th>
                <th>Rooms</th>
                <th>Size</th>
                <th>City</th>
                <th>Sort</th>
                <th>Min Price</th>
                <th>Max Price</th>
              </tr>
            </thead>
            {
              this.state.data.map(value => {
                return (
                  <tbody>
                    <tr>
                      <td>{ value.id }</td>
                      <td>{ value.country }</td>
                      <td>{ value.region }</td>
                      <td>{ value.zipCode }</td>
                      <td>{ value.rooms }</td>
                      <td>{ value.size }</td>
                      <td>{ value.city }</td>
                      <td>{ value.sort }</td>
                      <td>{ value.minPrice }</td>
                      <td>{ value.maxPrice }</td>
                    </tr>
                  </tbody>
                )
              })
            }
          </table >
        }
      </div >
    )
  }
}
export default State;