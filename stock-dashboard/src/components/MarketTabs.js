import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

function MarketTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            mt: 1, // Adjust top margin
            ml: 0, // Left margin to 0 for alignment
            mr: 3, // Right margin for spacing
            bgcolor: 'transparent' // Ensure transparent background
        }}>
            <Tabs value={value} onChange={handleChange} sx={{
                '.MuiTabs-flexContainer': {
                    justifyContent: 'flex-start', // Align tabs to the left
                },
                '.MuiTab-root': {
                    mx: 0.5, // Horizontal margin reduced
                    fontSize: '0.75rem', // Smaller font size for compact tabs
                    fontWeight: 'bold',
                    color: 'white',
                    '&:hover': { // Ensure hover effect applies uniformly
                        bgcolor: 'rgba(255, 255, 255, 0.1)', // More subtle hover effect
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        bgcolor: 'transparent' // Ensure full transparency on selection
                    },
                    borderRadius: '15px', // Smaller border radius
                    padding: '3px 8px', // Reduced padding for smaller tabs
                    border: '1px solid rgba(255, 255, 255, 0.2)' // Less prominent border
                },
                '.MuiTabs-indicator': {
                    display: 'none' // Ensuring no underline is visible
                }
            }}>
                <Tab label="Indices" />
                <Tab label="Stocks" />
                <Tab label="ETFs" />
            </Tabs>
        </Box>
    );
}

export default MarketTabs;
