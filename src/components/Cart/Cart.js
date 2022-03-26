import React from 'react';
import "./Cart.css";

const Cart = ({ cart, resetHandler, chooseHandler, choose }) => {
    return (
        <div className='cart'>
            <h3 className='order-text'>Selected Product: {cart.length}</h3>
            {
                cart.map(cart => <p className='cart-name'>{cart.name}</p>)
            }
            <button className='reset-btn' onClick={resetHandler}>Reset</button>
            <button className='choose-btn' onClick={() => chooseHandler(cart.length)}>Choose for one</button>
            {
                choose.map(choose => <p className='choose-name'>{cart[choose - 1].name}</p>)
            }
        </div>
    );
};

export default Cart;