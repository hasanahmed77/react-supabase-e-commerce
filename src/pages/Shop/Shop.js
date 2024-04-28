import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import './shop.scss'
import Card from '../../components/Card/Card'

const Shop = ({ hamburgerOn, items, currentGender, currentProducts, currentSizes, currentColors }) => {
  const [currentItems, setCurrentItems] = useState(items.filter((item) => item.gender === currentGender.toLowerCase()))

  console.log('current',currentItems)
  console.log('items', items)

  return (
    <div className='shop'>
      <div className={hamburgerOn ? '' : 'side'}>
        <Sidebar 
          hamburgerOn = { hamburgerOn }
          currentGender = { currentGender }
          items = { items }
          currentItems = { currentItems }
          setCurrentItems = {setCurrentItems}
        />  
      </div>

      <div className='main'>
        <div className="navbar">
          <ShoppingNavbar /> 
        </div>

        <div className="contents">
          { currentItems.map(item => (
              <Card
                item = {item}
              />
          )) }
        </div>
      </div>
    </div>
  )
}

export default Shop