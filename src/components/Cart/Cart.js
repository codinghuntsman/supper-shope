import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className='cart'>
            <h3 className='order-text'>Selected Product: {cart.length}</h3>
            {
                cart.map(cart => <p className='cart-name'>{cart.name}</p>)
            }
            <button className='reset-btn'>Reset</button>
            <button className='choose-btn'>Choose for one</button>
        </div>
    );
};

export default Cart;