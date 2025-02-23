import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, defs, linearGradient, stop } from "recharts";
import axios from "axios";

const MarketPriceGraph = () => {
    const [data, setData] = useState([
        { date: "Feb 1", cardamom: 1200, nutmeg: 800, rice: 50, avocado: 100 },
        { date: "Feb 2", cardamom: 1250, nutmeg: 820, rice: 55, avocado: 105 },
        { date: "Feb 3", cardamom: 1190, nutmeg: 810, rice: 53, avocado: 110 },
        { date: "Feb 4", cardamom: 1300, nutmeg: 830, rice: 52, avocado: 120 },
        { date: "Feb 5", cardamom: 1280, nutmeg: 820, rice: 54, avocado: 115 },
    ]);

    useEffect(() => {
        // Uncomment when API is available
        /*
        axios.get("YOUR_API_URL")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
        */
    }, []);

    return (
        <div style={{ width: "100%", height: 500, padding: 20, background: "#fff", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>📊 Daily Market Price of Crops (₹)</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                    {/* Background Grid */}
                    <defs>
                        <linearGradient id="colorCardamom" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorNutmeg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorAvocado" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis dataKey="date" tick={{ fill: "#333" }} />
                    <YAxis tick={{ fill: "#333" }} />
                    <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px", border: "1px solid #ddd" }} />
                    <Legend verticalAlign="top" align="right" />

                    {/* Smooth Lines with Gradient */}
                    <Line type="monotone" dataKey="cardamom" stroke="url(#colorCardamom)" strokeWidth={3} dot={{ fill: "#8884d8", r: 5 }} />
                    <Line type="monotone" dataKey="nutmeg" stroke="url(#colorNutmeg)" strokeWidth={3} dot={{ fill: "#82ca9d", r: 5 }} />
                    <Line type="monotone" dataKey="rice" stroke="url(#colorRice)" strokeWidth={3} dot={{ fill: "#ffc658", r: 5 }} />
                    <Line type="monotone" dataKey="avocado" stroke="url(#colorAvocado)" strokeWidth={3} dot={{ fill: "#ff7300", r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MarketPriceGraph;
