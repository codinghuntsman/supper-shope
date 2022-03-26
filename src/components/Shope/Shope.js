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

    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shope-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div >
            <div className="cart-container">

                <Cart cart={cart} key={cart.id} ></Cart>

            </div>
        </div >
    );
};

export default Shope;
