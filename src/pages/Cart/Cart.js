import React, { useState } from 'react';
import { useCartContext } from '../../hooks/useCartContext';
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar';
import { Link } from 'react-router-dom';
import './cart.scss';

const Cart = () => {
    const { cart, dispatch } = useCartContext();
    const [size, setSize] = useState('M')

    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    };

    let totalPrice = getTotalPrice();

    const handleDelete = (currentItem) => {
        dispatch({ type: 'DELETE', payload: currentItem });
    };

    const handleSize = e => {
        console.log(e.target.value)
        setSize(e.target.value)
    }

    return (
        <div className='cart'>
            <div className="navbar">
                <ShoppingNavbar color='white' />
            </div>
            <div className="cart-contents">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div className="cart-items" key={index}>
                            <div className="cart-image"><img src={item.image} alt={item.name} /></div>
                            <div className="cart-item-details">
                                <div className="cart-name">{item.name} ({size})</div>
                                <div className="cart-price">${item.price}</div>
                                <div className="cart-sizes" onClick={handleSize}>
                                    <button className='btn-sizes' value="S">S</button>
                                    <button className='btn-sizes' value="M">M</button>
                                    <button className='btn-sizes' value="L">L</button>
                                </div>
                                <button className="btn-del" onClick={() => handleDelete(item)}>-</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2 className='empty'>Cart is empty!</h2>
                )}
                {cart.length > 0 && (
                    <div className="price buy">
                        <p>Total: ${totalPrice}</p>
                        <Link to="/buy"><button>Buy</button></Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
