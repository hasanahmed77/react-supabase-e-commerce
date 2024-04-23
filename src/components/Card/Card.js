import React from 'react'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './card.scss'

const Card = ({ item }) => {
  return (
    <div className='card'>
        <img 
            className='card-image'
            src={item.image} 
        />
        <p className='card-title'>{ item.name }</p>
        <p className='card-price'>{ `$${ item.price}`}</p>
        <div className="options">
          <button className='btn-add-to-cart btn'><AddShoppingCartSharpIcon /></button>
        </div>
    </div>
  )
}

export default Card