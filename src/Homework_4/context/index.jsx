import React, { createContext, useContext, useReducer } from 'react';

import img1 from '../assets/imgs/img1.jpg';
import img2 from '../assets/imgs/img2.jpg';
import img3 from '../assets/imgs/img3.jpg';

import user1 from '../assets/imgs/user1.jpg';
import user2 from '../assets/imgs/user2.jpg';
import user3 from '../assets/imgs/user3.jpg';

export const HomeContext = createContext();
export const CardContext = () => useContext(HomeContext);

export default function Context({ children }) {

  const [state, dispetch] = useReducer(() => { }, [
    {
      src: img1,
      user_img: user1,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img2 }`,
      user_img: user2,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img3 }`,
      user_img: user3,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: img1,
      user_img: user1,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img2 }`,
      user_img: user2,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img3 }`,
      user_img: user3,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: img1,
      user_img: user1,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img2 }`,
      user_img: user2,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img3 }`,
      user_img: user3,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: img1,
      user_img: user1,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img2 }`,
      user_img: user2,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img3 }`,
      user_img: user3,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: img1,
      user_img: user1,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img2 }`,
      user_img: user2,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
    {
      src: `${ img3 }`,
      user_img: user3,
      title: 'New Apartment Nice Wiew',
      text: 'Quincy St, Brooklyn, NY, USA',
      sum1: '$2,800/mo',
      sum2: '$7,500/mo',
      box: {
        name1: '4 Beds',
        name2: '5 Baths',
        name3: '1 Garage',
        name4: '1200 Sq Ft',
      }
    },
  ])

  return (
    <HomeContext.Provider value={ [state, dispetch] }>
      { children }
    </HomeContext.Provider>
  )
}
