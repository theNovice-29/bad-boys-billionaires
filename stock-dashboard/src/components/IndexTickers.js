import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

function IndexTickers() {
    const ref = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
        script.async = true;
        script.onload = () => console.log("Script loaded and ready");
        script.onerror = (event) => console.error('Error loading the script:', event);
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": "350",
            "symbolsGroups": [
                {
                    "name": "Indices",
                    "originalName": "Indices",
                    "symbols": [
                        { "name": "FOREXCOM:SPXUSD", "displayName": "S&P 500" },
                        { "name": "FOREXCOM:NSXUSD", "displayName": "US 100 Cash CFD" },
                        { "name": "FOREXCOM:DJI", "displayName": "Dow Jones Industrial Average Index" },
                        { "name": "INDEX:NKY", "displayName": "Nikkei 225" },
                        { "name": "INDEX:DEU40", "displayName": "DAX Index" },
                        { "name": "FOREXCOM:UKXGBP", "displayName": "FTSE 100 Index" }
                    ]
                }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "locale": "en"
        });

        if (ref.current) {
            ref.current.appendChild(script);
        }

        return () => {
            if (ref.current) {
                ref.current.innerHTML = ''; // Remove all children, including the script
            }
        };
    }, []);

    return (
        <Box ref={ref} sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'background.paper' }}>
            {/* This is where the widget will load */}
        </Box>
    );
}

export default IndexTickers;
