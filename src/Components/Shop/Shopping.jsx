import React, { useState, useEffect } from "react";
import "./Shopping.css";
import axios from "axios";

const products = [
    { id: 1, name: "Cardamom", image: "/IMAGESS/cardamom1.png.jpg", price: 0 },
    { id: 2, name: "Rubber", image: "/IMAGESS/rubber1.png.jpg", price: 0 },
    { id: 3, name: "Avocado", image: "/IMAGESS/avacado2.png.jpg", price: 0 },
    { id: 4, name: "Nutmeg", image: "/IMAGESS/nutmeg3.png.jpg", price: 0 },
];

const Shopping = () => {
    const [prices, setPrices] = useState({});

    // Simulated API call to fetch daily prices
    useEffect(() => {
        axios.get("YOUR_API_URL")  // Replace with your actual API
            .then(response => setPrices(response.data))
            .catch(error => console.error("Error fetching prices:", error));
    }, []);

    return (
        <div className="shopping-container">
            {/* Header Section */}
            <header className="shopping-header">
                <h1>Krishi Bhavan Market</h1>
                <p>Fresh farm products directly from the source!</p>
            </header>

            {/* Daily Price Section */}
            <section className="daily-prices">
                <h2>Today's Market Prices (₹ per kg)</h2>
                <div className="price-list">
                    {products.map((product) => (
                        <div key={product.id} className="price-card">
                            <h3>{product.name}</h3>
                            <p>₹ {prices[product.name.toLowerCase()] || "Loading..."}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p className="price">₹ {prices[product.name.toLowerCase()] || "Loading..."}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shopping;
