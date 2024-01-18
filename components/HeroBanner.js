import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../Pictures/hero.jpg'; // Assuming you have an image to import
import { useNavigate } from 'react-router-dom';
const HeroBanner = () => {
  const navigate=useNavigate();
  const handle=()=>{
    navigate('/ExerciseTable');
  }
  return (
    <Box>
      <Typography color="#ff2625" fontWeight="600" fontSize="26px" style={{marginTop:"30px", marginLeft:"70px", fontFamily:"serif" }}>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" style={{marginTop:"30px", marginLeft:"70px"}}>
      <span style={{ color: '#ffffff', fontFamily:"serif" }}> Sweat, Smile and Repeat</span >
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} style={{marginTop:"30px", marginLeft:"70px", fontFamily:"serif" }}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#ff2625', padding: '10px' }} onClick={handle} style={{marginTop:"30px", marginLeft:"70px"}}>
      <span style={{ color: '#fff' }}> Explore Exercises</span >  
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.7,
          display: { lg: 'block', xs: 'none' },
          fontSize: '200px',
          color:'#fff'
        }}
        style={{marginBottom:"30px", marginLeft:"70px", fontFamily:"unset" }}
      >
        Exercise
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroBannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'fit',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.9
        }}
      />
    </Box>
  );
};
export default HeroBanner;