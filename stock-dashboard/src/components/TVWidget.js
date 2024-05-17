/* global TradingView */
import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol }) => {
    const containerRef = useRef(null); // Ensure useRef is initialized correctly

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            new TradingView.widget({
                container_id: containerRef.current.id,
                autosize: true,
                symbol: symbol,
                interval: 'D',
                timezone: 'exchange',
                theme: 'dark',
                style: '1',
                locale: 'en',
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                allow_symbol_change: true,
                details: true
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [symbol]); // Ensure dependencies are correctly listed

    return <div id="tradingview-widget-container" ref={containerRef} style={{ height: 400 }} />; // Set a style to ensure the container has dimensions
};

export default TradingViewWidget;
