import React from 'react';
import Navbar from '../components/Navbar';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import SingIn from '../components/SingIn';
import Error from '../components/Error';


export default function Root() {

  const token = JSON.parse(localStorage.getItem('token'));
  const navigate = useNavigate();

  return (
    <>
      <button style={ { padding: '10px' } } onClick={ () => navigate(1) }>oldinga</button>
      <button style={ { padding: '10px' } } onClick={ () => navigate(-1) }>orqaga</button>
      <Routes>
        <Route element={ <Navbar /> }>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={ token ? <Home /> : <Navigate to='/singin' /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <Error /> } />
        </Route>
        <Route element={ <Navbar /> }>
          <Route path='/singin' element={ <SingIn /> } />
        </Route>
      </Routes >
    </>

  )
}

// react-router-dom
// BrowserRouter
// NavLink activeStyle() => .activa{}
// Route component => element
// Routes
// useHistory va useLocation => useNavigate;
// Redirect  =>  Navigate
// Outlet