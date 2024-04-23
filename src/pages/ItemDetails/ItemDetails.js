import React from 'react'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'

const ItemDetails = () => {
  return (
    <div>
        <ShoppingNavbar />
        <div className='item-details'>
            <div className="product-image">

            </div>
            <div className="product-details">
                <div className="product-title"></div>
                <div className="product-price"></div>
                <div className="product-sizes"></div>
                
                <div className="add-to-cart">
                    <div className="no-of-products"></div>
                    <button className='btn-add-to-cart btn'><AddShoppingCartSharpIcon /></button>
                </div>
                <div className="product-description">

                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetails