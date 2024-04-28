import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ hamburgerOn, items, currentGender, currentItems, setCurrentItems }) => {
    const theItems = items.filter((item) => item.gender === currentGender.toLowerCase())

    const handleFilter = (e) => {
        if (e.target.value === "All") setCurrentItems(theItems)
        if (e.target.value === "T-Shirt") setCurrentItems(theItems.filter(item => item.type === 'tops'))
        if (e.target.value === "Hoodie")  setCurrentItems(theItems.filter(item => item.type === 'hoodie')) 
    }

    return (
        <div className={`sidebar ${hamburgerOn ? 'sidebar-phone' : ''}`}>
            <div className="menu-items">
                <p>- PRODUCTS</p>
                 <div className="sub-menu" onClick={handleFilter}>
                        <label>
                            <input type="radio" name="product" value="All" defaultChecked  />
                            All
                        </label> <br/>
                        <label>
                            <input type="radio" name="product" value="T-Shirt" />
                            T-Shirt
                        </label> <br/>
                        <label>
                            <input type="radio" name="product" value="Hoodie" />
                            Hoodie
                        </label>
                </div> 
            </div>
        </div>
    );
};

export default Sidebar;
