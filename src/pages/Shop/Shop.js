import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import './shop.scss'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Shop = ({ hamburgerOn }) => {

  const handleClick = e => {

  }

  return (
    <div className='shop'>
      <div className={hamburgerOn ? '' : 'side'}>
        <Sidebar hamburgerOn = { hamburgerOn }/>  
      </div>

      <div className='main'>
        <div className="navbar">
          <ShoppingNavbar /> 
        </div>

        <div className="contents">
          <Link to="/"><Card  onClick = {handleClick}/></Link>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Shop