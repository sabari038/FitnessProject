import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from './logo.png';
import './Footer.css';

const Footer = () => (
  <Box mt="180px" class="footer">
    <Stack className='d-flex flex-row' sx={{ alignItems: 'center', marginLeft:"550px"}}>
    <center>
      <img src={Logo} alt="logo" style={{ width: '130px', height: '100px' }} />
      </center>
      <p style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"20px", paddingTop:"12px", marginRight:"20px"}}>Lightweight Buddies</p>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="11px" textAlign="center" pb="40px">Thank You ❤️ For Showing Interest</Typography>
  </Box>
);

export default Footer;