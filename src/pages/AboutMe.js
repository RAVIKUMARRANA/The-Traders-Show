import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutMe from '../assets/images/aboutMe.jpg';
import logo from '../assets/images/logo.png';

const AboutMe = () => {
    return <Box sx={{ display: 'flex',flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
    <div>
      <img src={aboutMe} alt="about me img" height="400px" width="350px" />
    </div>
    <div style={{margin:'auto'}}>
      <span style={{fontSize:'1.5em',fontWeight: 'bold',display:'block',
       fontFamiy:'Maiandra GD',textAlign: 'left'}}>
      I've been a young Entrepreneur and Trainer for 6 years, now I'm currently 26 years old and I've helped numerous people change their lives for the better. I'm knowledgeable in many areas including; Stock Market, Business, Marketing, Sales, Psychology, Self-development and more. My passion is helping people achieve their dreams and reach their full potential in life. I believe that anyone can achieve anything they set their mind to and I will do whatever it takes to help them get there.
      </span>
    </div>

  </Box>
  };
  
  export default AboutMe;