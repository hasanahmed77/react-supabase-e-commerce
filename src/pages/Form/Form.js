import React, { useState } from 'react'
import './form.scss'
import ShoppingNavbar from '../../components/ShoppingNavbar/ShoppingNavbar'
import { useCartContext } from '../../hooks/useCartContext';

const Form = () => {
    const { cart, dispatch } = useCartContext();

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setIsSubmitted(true)
        dispatch({ type:'CLEAR_CART'})
    }

    return (
    <div className='form-page'>
        <div className="navbar">
            <ShoppingNavbar /> 
        </div>
        <form className='form' onSubmit={handleSubmit}>
            <label>Full name:</label>
            <input type='text' required/> <br></br>

            <label>Email:</label>
            <input type='email' required/> <br></br>

            <label>Address:</label>
            <input type='text' required/> <br></br>

            { isSubmitted ? <p>Order placed!</p> : <button onClick={handleSubmit}>Order</button> }
        </form>
    </div>
    )
    }

export default Form