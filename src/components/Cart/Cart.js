import React from 'react';
import "./Cart.css";

const Cart = ({ cart, resetHandler, chooseHandler, choose }) => {
    return (
        <div className='cart'>
            <h3 className='order-text'>Selected Product: {cart.length}</h3>
            {
                cart.map(cart => <h5 className='cart-name'>{cart.name}</h5>)
            }
            <button className='reset-btn' onClick={resetHandler}>Reset</button>
            <button className='choose-btn' onClick={() => chooseHandler(cart.length)}>Choose for one</button>
            {
                choose === 0 ? <p></p> : <h4 className='choose-name'>{cart[choose - 1].name}</h4>
            }
        </div>
    );
};

export default Cart;