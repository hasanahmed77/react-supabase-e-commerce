import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SvgIcon from '@mui/material/SvgIcon';
import './ShoppingNavbar.scss'

const ShoppingNavbar = ({ color }) => {
    return (
    <nav className='navbar shopping-navbar'>
        <ul>
            <li className={ color === 'white' ? 'shopping-logo shopping-logo-white' :'shopping-logo' }>
                <Link to="/">ARTIFY</Link>
            </li>
            <li className='cart'>
                <Link to="/cart">
                    <SvgIcon 
                        component={ ShoppingCartOutlinedIcon }
                        style={{ color: 'white' }}
                     />
                </Link>
            </li>
        </ul>
    </nav>
    )
}

export default ShoppingNavbar