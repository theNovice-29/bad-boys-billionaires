// marketDataContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const MarketDataContext = createContext();

export const useMarketData = () => useContext(MarketDataContext);

export const MarketDataProvider = ({ children }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=1ADN8ZQZYF0YUE9F`)
            .then(response => setData(response.data))
            .catch(error => console.error('Failed to fetch data', error));
    }, []);

    return (
        <MarketDataContext.Provider value={data}>
            {children}
        </MarketDataContext.Provider>
    );
};
