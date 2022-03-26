import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shope.css";

const Shope = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('shoes.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [choose, setChoose] = useState(0)
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    const resetHandler = () => {
        setCart([]);
    }
    const chooseHandler = (length) => {
        const newValue = Math.floor(Math.random() * length) + 1;
        setChoose(newValue);
    }
    return (
        <div className='shope-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div >
            <div className="cart-container">
                <Cart key={cart.id} cart={cart} resetHandler={resetHandler} chooseHandler={chooseHandler} choose={choose}></Cart>
            </div>
        </div >
    );
};

export default Shope;
