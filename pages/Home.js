import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import NavScrollExample from '../components/Navbar';
import Footer from '../components/Footer';
import ExerciseTable from '../components/ExerciseTable';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
    <NavScrollExample/>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseTable />
      <Footer />
    </Box>
  );
};

export default Home;