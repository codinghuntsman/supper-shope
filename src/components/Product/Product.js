import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="image" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>price: ${price}</p>
                <p><small>seller: {seller}</small></p>
                <p><small>ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;