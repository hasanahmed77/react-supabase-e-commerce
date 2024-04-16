import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import shoppingCart from '../../images/shopping-cart.png'

const Navbar = () => {
    const [selectWomen, setSelectWomen] = useState(false)
    const [selectMen, setSelectMen] = useState(false)

    const handleSelect = (e) => {
        if (e.target.innerText === 'WOMEN') {
            if (selectMen) setSelectMen(!selectMen)
            setSelectWomen(!selectWomen)
        } 
        if (e.target.innerText === 'MEN') {
            if (selectWomen) setSelectWomen(!selectWomen)
            setSelectMen(!selectMen)
        } 
    }

    return (
    <nav className='navbar'>
        <ul>
            <li className='logo'>
                <Link to="/">UNIQLO</Link>
            </li>
            <li>
                <div className="gender-select">
                    <span className={`select-women ${ selectWomen ? 'selected' : 'not-selected' }`} onClick={handleSelect}>WOMEN</span>
                    <span className={`select-men ${ selectMen ? 'selected' : 'not-selected' }`} onClick={handleSelect}>MEN</span>
                </div>
            </li>
            <li className='cart'><Link to="/"><img src={shoppingCart} alt="CART" /></Link></li>
        </ul>
    </nav>
    )
}

export default Navbar