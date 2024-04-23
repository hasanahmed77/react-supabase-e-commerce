import React from 'react'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import './card.scss'

const Card = () => {
  return (
    <div className='card'>
        <img 
            className='card-image'
            src='https://img.freepik.com/free-photo/front-blank-white-tshirt-with-hanger-design_1409-4412.jpg?t=st=1713694223~exp=1713697823~hmac=7a506602c14ec0f30ffe05f55a02e5bec0d7c1f45e8d726fb4ffec37d48fa083&w=1060' 
        />
        <p className='card-title'>White T-shirt</p>
        <p className='card-price'>$30</p>
        <div className="options">
          <button className='btn-add-to-cart btn'><AddShoppingCartSharpIcon /></button>
        </div>
    </div>
  )
}

export default Card