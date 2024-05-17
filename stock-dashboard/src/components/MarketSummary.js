import React from 'react';
import { Typography, Box } from '@mui/material';
import TradingViewWidget from './TVWidget';
import {ResponsiveContainer} from "recharts";

const MarketSummary = () => {
    return (
        <Box sx={{ color: 'white', mb: 2, mt: 2}} marginTop={800}>
            <Typography variant="h6" component="div" marginBottom={2}>
                Market Summary - NASDAQ
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
                <TradingViewWidget symbol="INDEX:IUXX" />
                {/*<TradingViewWidget symbol="NASDAQ:IXIC" />
                <TradingViewWidget symbol="XETR:DAX" />
                <TradingViewWidget symbol="SP:SPX" />*/}
                {/*<TradingViewWidget symbol="INDEX:NKY" />*/}

            </ResponsiveContainer>
        </Box>
    );
};

export default MarketSummary;
