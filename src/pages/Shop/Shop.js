import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import './shop.scss'

const Shop = ({ hamburgerOn }) => {

  return (
    <div className='shop'>
      <div className="side">
      <Sidebar hamburgerOn = { hamburgerOn }/>  
      </div>

      <div className='main'>
        <ShoppingNavbar />
      </div>
    

    </div>
  )
}

export default Shop