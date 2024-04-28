import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [action.payload, ...state.cart]
            };
        case 'DELETE':
            return {
                cart: state.cart.filter(item => item.id != action.payload.id)
            }
        case 'CLEAR_CART':
            return {
                cart: []
            }
        default:
            return state;
    }
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: []
    });

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            { children }
        </CartContext.Provider>
    );
};
