import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import shoppingCart from '../../images/shopping-cart.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SvgIcon from '@mui/material/SvgIcon';

const Navbar = ({ setCurrentGender }) => {
    const [selectWomen, setSelectWomen] = useState(true)
    const [selectMen, setSelectMen] = useState(false)

    const handleSelect = (e) => {
        if (e.target.innerText === 'WOMEN') {
            if (selectMen) setSelectMen(!selectMen)
            setSelectWomen(!selectWomen)
            setCurrentGender('WOMEN')
        } 
        if (e.target.innerText === 'MEN') {
            if (selectWomen) setSelectWomen(!selectWomen)
            setSelectMen(!selectMen)
            setCurrentGender('MEN')
        } 
    }

    return (
    <nav className='navbar'>
        <ul>
            <li className='logo'>
                <Link to="/">ARTIFY</Link>
            </li>
            <li>
                <div className="gender-select">
                    <span className={`select-women ${ selectWomen ? 'selected' : 'not-selected' }`} onClick={handleSelect}>WOMEN</span>
                    <span className={`select-men ${ selectMen ? 'selected' : 'not-selected' }`} onClick={handleSelect}>MEN</span>
                </div>
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

export default Navbar