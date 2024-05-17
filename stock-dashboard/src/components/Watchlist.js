import React, { useEffect, useRef } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Paper, Typography, IconButton, Box, TextField, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'; // Make sure this import is added
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

const stocks = [
    { symbol: 'AAPL', lastPrice: 184.02, change: '+1.28', currentPrice: 185.00 },
    { symbol: 'GOOGL', lastPrice: 2734.38, change: '-15.30', currentPrice: 2720.00 },
    { symbol: 'DAX', lastPrice: 15678.49, change: '+150.12', currentPrice: 15800.00 },
    { symbol: 'NIKKEI', lastPrice: 28976.34, change: '-87.45', currentPrice: 28900.00 },
    { symbol: 'MSFT', lastPrice: 300.00, change: '+3.50', currentPrice: 303.50 },
    { symbol: 'AMZN', lastPrice: 3500.00, change: '+25.00', currentPrice: 3525.00 },
    { symbol: 'FB', lastPrice: 270.50, change: '-5.00', currentPrice: 265.50 },
    { symbol: 'TSLA', lastPrice: 900.00, change: '+10.00', currentPrice: 910.00 },
];

function Watchlist() {
    const widgetRef = useRef(null);

    useEffect(() => {
        // Clear any existing widgets
        widgetRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: "INDEX:IUXX",
            width: "95%",
            locale: "en",
            colorTheme: "dark",
            isTransparent: true,
        });
        if (widgetRef.current) {
            widgetRef.current.appendChild(script);
        }
    }, []);

    const getIcon = (change) => {
        if (change.startsWith('+')) return <ArrowUpwardIcon sx={{ color: '#26a69a' }} />;
        if (change.startsWith('-')) return <ArrowDownwardIcon sx={{ color: '#ef5350' }} />;
        return <TrendingFlatIcon />;
    };

    return (
        <Paper sx={{ height: 'calc(100vh - 64px)', overflowY: 'auto', bgcolor: 'background.paper', mt: '64px' }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    Watchlist
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon sx={{ mr: 1, color: 'action.active' }} />
                    <TextField size="small" placeholder="Search stocks" sx={{ width: '150px', mr: 2 }} />
                    <IconButton color="primary">
                        <AddCircleOutlineIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box ref={widgetRef} sx={{ mt: 2, mb: 2 }}>
                {/* This is where the TradingView widget will be loaded */}
            </Box>
            <List>
                {stocks.map((stock, index) => (
                    <ListItem key={index} divider sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <ListItemIcon>
                            {getIcon(stock.change)}
                        </ListItemIcon>
                        <ListItemText
                            primary={stock.symbol}
                            primaryTypographyProps={{ fontWeight: 'bold' }}
                            secondary={`$${stock.lastPrice}`}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" sx={{ bgcolor: '#26a69a', mr: 1, minWidth: '64px' }}>Buy</Button>
                            <Button variant="contained" sx={{ bgcolor: '#ef5350', minWidth: '64px' }}>Sell</Button>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default Watchlist;
