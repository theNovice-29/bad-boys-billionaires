import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Theme from './components/Theme';
import Navbar from './components/Navbar';
import MarketSummary from './components/MarketSummary';
import IndexTickers from './components/IndexTickers';
import Watchlist from './components/Watchlist';
import News from './components/News';
import { CssBaseline, Grid, Box, Typography } from '@mui/material';
import { MarketDataProvider } from './components/MarketDataContext'; // Ensure this is the correct path to your context

function App() {
    const [tabValue, setTabValue] = React.useState(0);

    return (
        <Router>
            <MarketDataProvider>
                <Theme>
                    <CssBaseline />
                    <Navbar tabValue={tabValue} setTabValue={setTabValue} />
                    <Box sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
                        <Routes>
                            <Route path="/" element={
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={9}>
                                        <Typography variant="h4" component="div" sx={{ color: 'white', mb: 2, fontWeight: 'bold', mt: 2 }}>
                                            Market Summary
                                        </Typography>
                                        <MarketSummary />
                                        <IndexTickers />
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Watchlist />
                                    </Grid>
                                </Grid>
                            } />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </Box>
                </Theme>
            </MarketDataProvider>
        </Router>
    );
}

export default App;
