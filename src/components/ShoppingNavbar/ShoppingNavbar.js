import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import './ShoppingNavbar.scss'

const ShoppingNavbar = () => {
    return (
    <nav className='navbar'>
        <ul>
            <li className='shopping-logo'>
                <Link to="/">ARTIFY</Link>
            </li>
            <li className='cart'>
                <Link to="/">
                    <SvgIcon 
                        component={ShoppingCartOutlinedIcon}
                        style={{ color: 'white' }}
                     />
                </Link>
            </li>
        </ul>
    </nav>
    )
}

export default ShoppingNavbar