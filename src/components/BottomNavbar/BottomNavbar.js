import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';
import './bottomNavbar.scss'

const BottomNavbar = () => {
  return (
    <nav className='navbar-bottom'>
      <ul>
        <li className='btn-home'><Link to='/'><HomeIcon style={{ color: 'white' }} /></Link></li>
        <li className='btn-search'><SearchIcon /></li>
        <li className='btn-subscribe'><Link to="/"><SubscriptionsIcon style={{ color: 'white' }} /></Link></li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
