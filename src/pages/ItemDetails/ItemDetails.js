import React from 'react'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import './ItemDetails.scss'

const ItemDetails = ({ items }) => {
  const location = useLocation()
  const currentItemIndex = location.pathname.slice(6) - 1
  const currentItem = items[currentItemIndex]
  console.log(currentItem)

  return (
    <div className='wrapper'>
        <ShoppingNavbar color='white' />
        { currentItem && <div className='item-details'>
            <div className="product-image"><img src={ currentItem.image } alt={ currentItem.name } /> </div>
            <div className="product-details">
                <div className="product-name">{ currentItem.name }</div>
                <div className="product-price">${ currentItem.price }</div>
                <div className="product-sizes">
                  <button className='sizes'>S</button>
                  <button className='sizes'>M</button>
                  <button className='sizes'>L</button>
                </div>
                
                <div className="add-to-cart">
                    <div className="quantity">Only { currentItem.quantity } available!</div>
                    <button className='btn-add-to-cart btn btn-item-details'><AddShoppingCartSharpIcon /></button>
                </div>
                <div className="product-description">
                  <p className='description-header'>Description:</p>
                  <div className="quantity">
                    { currentItem.description }
                  </div>
                  </div>
            </div>
        </div> }
    </div>
  )
}

export default ItemDetails