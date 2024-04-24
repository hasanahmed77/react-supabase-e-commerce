import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import './shop.scss'
import Card from '../../components/Card/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Shop = ({ hamburgerOn, items, currentGender, currentProducts, currentSizes, currentColors }) => {
  const currentItems = items.filter((item) => item.gender === currentGender.toLowerCase())
  console.log(currentItems)

  return (
    <div className='shop'>
      <div className={hamburgerOn ? '' : 'side'}>
        <Sidebar 
          hamburgerOn = { hamburgerOn }
          currentItems = { currentItems }
          currentGender = { currentGender }
          currentProducts = { currentProducts }
          currentSizes = { currentSizes }
          currentColors = { currentColors }
        />  
      </div>

      <div className='main'>
        <div className="navbar">
          <ShoppingNavbar /> 
        </div>

        <div className="contents">
          { currentItems.map(item => (
            <Link 
              to={ `/shop/${ item.id }` }
              key={item.id}
            >
              <Card
                item = {item}
              />
            </Link>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Shop