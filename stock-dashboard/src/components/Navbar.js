import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, Typography, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../assets/images/dollar_logo.png';

function Navbar({ tabValue, setTabValue }) {
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <AppBar position="fixed" sx={{ background: 'black', boxShadow: 'none' }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar alt="BullsEye Logo" src={LogoImage} sx={{ mr: 1, width: 40, height: 40 }} />
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        BullsEye
                    </Typography>
                    <Tabs value={tabValue} onChange={handleChange} textColor="inherit" indicatorColor="primary" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                        <Tab label="Markets" component={Link} to="/" />
                        <Tab label="News" component={Link} to="/news" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
