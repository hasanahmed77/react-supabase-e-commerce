import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './bottomNavbar.scss';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const BottomNavbar = ({ hamburgerOn, setHamburgerOn, setCurrentGender }) => {
  const location = useLocation();
  
  const openHamburger = () => {
    setHamburgerOn(!hamburgerOn);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentGender('WOMEN')
    }
  }, [location.pathname]);

  return (
    
    <nav className='navbar-bottom'>
      <ul>
        <li className='btn-home'><Link to='/'><HomeIcon style={{ color: 'black' }} /></Link></li>
        <li className='btn-search'><SearchIcon style={{ color: 'black' }} /></li>
        <li className='btn-subscribe'><Link to="/"><SubscriptionsIcon style={{ color: 'black' }} /></Link></li>
        {location.pathname === '/shop' && !hamburgerOn && <li className='menu-icon btn-mobile' onClick={openHamburger}><MenuIcon style={{ color: 'black' }} /></li>}
        {location.pathname === '/shop' && hamburgerOn && <li className='close-icon btn-mobile' onClick={openHamburger}><CloseIcon style={{ color: 'black' }} /></li>}
      </ul>
    </nav>
  );
};

export default BottomNavbar;
