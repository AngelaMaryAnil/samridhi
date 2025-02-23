import React from 'react';
import './Shopping.css'; // Make sure to create and style this CSS file to match your theme

const Shopping = () => {
    return (
        <div className="shopping-container">
            <h1 className="shopping-title">Welcome to the Shop</h1>
            <div className="products">
                <div className="product-card">
                   {/* <img src="path/to/image1.jpg" alt="Product 1" className="product-image" /> */}
                    <h2 className="product-name">Product 1</h2>
                    <p className="product-price">$10.00</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                <div className="product-card">
                    {/*<img src="path/to/image2.jpg" alt="Product 2" className="product-image" /> */}
                    <h2 className="product-name">Product 2</h2>
                    <p className="product-price">$20.00</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
                {/* Add more products as needed */}
            </div>
        </div>
    );
};

export default Shopping;