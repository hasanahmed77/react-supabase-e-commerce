import React from 'react'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './card.scss'
import { useCartContext } from '../../hooks/useCartContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Card = ({ item }) => {
  const {cart, dispatch} = useCartContext()

  const handleAddToCart = () => {
    dispatch({type: "ADD_TO_CART", payload: item})
    console.log('added')
  }

  return (
    <div className='card'>
          <Link 
              to={ `/shop/${ item.id }` }
              key={item.id}
          >
          <img 
              className='card-image'
              src={item.image} 
          />
          <p className='card-title'>{ item.name }</p>
          <p className='card-price'>{ `$${ item.price}`}</p>
          <div className="options"></div>
          </Link>

        <div className="options">
          <button className='btn-add-to-cart btn' onClick={handleAddToCart}><AddShoppingCartSharpIcon /></button>
        </div>
    </div>
  )
}

export default Card