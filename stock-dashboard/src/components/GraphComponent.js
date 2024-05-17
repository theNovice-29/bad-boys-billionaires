import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useMarketData } from './marketDataContext'; // Ensure this path matches your context file

const GraphComponent = () => {
    const data = useMarketData(); // This will get your market data from context

    // Assuming your data is an array of objects like [{ time: '2021-01-01', value: 13900 }, ...]
    const chartData = Object.entries(data["Time Series (5min)"] || {}).map(([key, value]) => ({
        time: key,
        value: parseFloat(value['4. close']) // Adjust this if your data structure is different
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default GraphComponent;
