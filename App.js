import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Franchise from './components/Franchise';
import GymTrainersPage from './components/Trainwithus';
import SubscriptionPage from './components/Subscription';
import { Franchiseresponse } from './components/Franchiseresponse';
import ExerciseAbs from './components/ExerciseAbs';
import ExerciseChest from './components/ExerciseChest';
import ExerciseTriceps from './components/ExerciseTriceps';
import ExerciseBiceps from './components/ExerciseBiceps';
import ExerciseShoulder from './components/ExerciseShoulder';
import ExerciseTable from './components/ExerciseTable';
import ExerciseForearm from './components/ExerciseForearm';
import BodyFatCalculator from './components/BodyFatCalculator';
const App = () => {
  return (
    <Box width="400px" sx={{width: { xl: '1488px'}}} m="auto">
        
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/Franchise" element={<Franchise />} />
            <Route path="/Subscription" element={<SubscriptionPage />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/ExerciseAbs" element={<ExerciseAbs />} />
            <Route path="/ExerciseChest" element={<ExerciseChest />} />
            <Route path="/ExerciseTriceps" element={<ExerciseTriceps />} />
            <Route path="/ExerciseBiceps" element={<ExerciseBiceps />} />
            <Route path="/ExerciseShoulder" element={<ExerciseShoulder />} />
            <Route path="/ExerciseTable" element={<ExerciseTable />} />
            <Route path="/ExerciseForearm" element={<ExerciseForearm />} />
            <Route path="/Franchiseresponse" element={<Franchiseresponse />} />
            <Route path="/Trainwithus" element={<GymTrainersPage />} />
            <Route path="/BodyFatCalculator" element={<BodyFatCalculator />} />
        </Routes>
    </Box>
  )
}

export default App
