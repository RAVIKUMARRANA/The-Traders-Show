import { Box, Typography } from '@mui/material';
import React from 'react';
import rohit from '../assets/images/rohit.jpg';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <Box sx={{ display: 'flex',flexDirection: 'row', textAlign: 'center', justifyContent: 'space-evenly' }}>
      <div>
        <img src={rohit} alt="rohit img" height="400px" width="350px" />
      </div>
      <div>
        <span style={{fontSize:'4.5em',fontWeight: 'bold',display:'block', fontFamiy:'Bahnschrift SemiBold Condensed'}}>
         WELCOME TO
        </span>
        <span style={{fontSize:'3.5em',fontWeight: 'bold',color:'red',display:'block',fontFamiy:'Bahnschrift SemiBold Condensed'}}>
        THE TRADERS SHOW
        </span>
        <img src={logo} alt="logo img" height="250px" width="250px" />
      </div>

    </Box>
  )
};

export default Home;

