import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ hamburgerOn }) => {
    const [selectTshirt, setSelectTshirt] = useState(false)
    const [selectHoodie, setSelectHoodie] = useState(false)
    const [selectS, setSelectS] = useState(false)
    const [selectM, setSelectM] = useState(false)
    const [selectL, setSelectL] = useState(false)
    const [selectWhite, setSelectWhite] = useState(false)
    const [selectBlack, setSelectBlack] = useState(false)

    const [showProduct, setShowProduct] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [showColor, setShowColor] = useState(false);

    const handleClick = (e) => {
        const clickedOn = e.target.innerText;
        console.log(clickedOn);
        
        if (clickedOn === '- PRODUCTS') {
            console.log('PRODUCT subsection');
            setShowProduct(!showProduct);
        } else if (clickedOn === '- SIZES') {
            console.log('SIZE subsection');
            setShowSize(!showSize);
        } else if (clickedOn === '- COLORS') {
            console.log('COLOR subsection');
            setShowColor(!showColor);
        }        
    };

    const handleFilter = () => {
    }

    return (
        <div className={`sidebar ${hamburgerOn ? 'sidebar-phone' : ''}`}>
            <div className="menu-items">
                <p onClick={handleClick}>- PRODUCTS</p>
                { showProduct && <div className="sub-menu">
                    <ul className='products'>
                        <li>T-Shirt</li>
                        <li>Hoodie</li>
                    </ul>
                </div> }
                <p onClick={handleClick}>- SIZES</p>
                { showSize && <div className="sub-menu">
                    <ul className='sizes'>
                        <li >S</li>
                        <li >M</li>
                        <li >L</li>
                    </ul>
                </div> }
                <p onClick={handleClick}>- COLORS</p>
                { showColor && <div className="sub-menu">
                    <ul className='colors'>
                        <li>White</li>
                        <li>Black</li>
                    </ul>
                </div> }
            </div>
        </div>
    );
};

export default Sidebar;
