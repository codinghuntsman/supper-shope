import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1 className='header-title'>SUPPER SHOPE</h1>
                <div>
                    <a href="/shope">Shope</a>
                    <a href="/about">About</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/addtocart">Cart</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;