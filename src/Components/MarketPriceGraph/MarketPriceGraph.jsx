import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const MarketPriceGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("YOUR_API_URL")  // Replace with actual API URL
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cardamom" stroke="#8884d8" />
                <Line type="monotone" dataKey="nutmeg" stroke="#82ca9d" />
                <Line type="monotone" dataKey="rice" stroke="#ffc658" />
                <Line type="monotone" dataKey="avocado" stroke="#ff7300" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MarketPriceGraph;
