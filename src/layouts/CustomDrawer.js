import { AppBar, Toolbar, Typography, Box, Button, } from '@mui/material';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { navItems } from '../data/Menu';
import '../assets/CustomDrawer.css'

const CustomDrawer = () => {

    return (
        <AppBar sx={{ bgcolor: "#002060" }} position='sticky'>
            <Toolbar>
                <Typography sx={{ flexGrow: '1' }}>
                    The Traders Show
                    </Typography>
                <Box sx={{ flexGrow: '2', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly' }}>
                    {navItems.map((item) => (
                        <NavLink exact activeClassName="active" to={item.path}>
                            <Button key={item.name} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        </NavLink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default CustomDrawer;