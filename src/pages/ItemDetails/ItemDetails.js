import React from 'react'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import './ItemDetails.scss'
import { useCartContext } from '../../hooks/useCartContext';

const ItemDetails = ({ items }) => {
  const location = useLocation()
  const currentItemIndex = location.pathname.slice(6) - 1
  const currentItem = items[currentItemIndex]
  console.log(currentItem)

  const {cart, dispatch} = useCartContext()

  const handleAddToCart = () => {
    dispatch({type: "ADD_TO_CART", payload: currentItem})
    console.log('added')
  }

  return (
    <div className='wrapper'>
        <ShoppingNavbar color='white' />
        { currentItem && <div className='item-details'>
            <div className="product-image"><img src={ currentItem.image } alt={ currentItem.name } /> </div>
            <div className="product-details">
                <div className="product-name">{ currentItem.name }</div>
                <div className="product-price">${ currentItem.price }</div>

                
                <div className="add-to-cart">
                    <div className="quantity">Only { currentItem.quantity } available!</div>
                    <button className='btn-add-to-cart btn btn-item-details' onClick={handleAddToCart}><AddShoppingCartSharpIcon /></button>
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