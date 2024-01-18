import React from 'react';
import './Trainwithus.css';
import th from '../Trainer/Tharun.jpg'
import sa from '../Trainer/sabari.jpg'
import sh from '../Trainer/Shash.jpg'


const GymTrainersPage = () => {
    return (
        <>
        <div className='profile'>
        <div className="gym-trainers-page">
        <div className="trainers-container">
        <div className="trainer-card">
        <img src={th} style={{height:"435px", width:"300px"}}/>
        <h3 className="name">THARUN</h3>
            <p>Once an unfit kid to now a slightly more fit kid. Used to only go to the gym with no motivation, rekindled his love for fitness again. Jared focuses on form and technique instead of just burning cals during class. What’s important is the quality and not the quantity. Come and have a fun time and sweat it out with Jared!</p>
          </div>
          </div>
      </div>
      <div className="gym-trainers-page">
      <div className="trainers-container">
      <div className="trainer-card">
      <img src={sh}/>
      <h3 className="name">SHASHVANTH</h3>
      <p>He may look well-adjusted in the gym but deep down. Okay. Maybe not so deep down. In whatever he's doing though, Jaysen always aims to show up authentically, and is committed to giving you his hundred percent inside the studio and out. He doesn’t believe in ‘one-size-fits-all’ with things fitness and beyond, so he’d like nothing more than for you to just come as you are. His ambition in fitness can be summarised by Jim Carrey’s quote: You can fail at the things you don’t like, so might as well do what you love.</p>
      </div>
      </div>
      </div>
      <div className="gym-trainers-page">
      <div className="trainers-container">
      <div className="trainer-card">
      <img src={sa}/>
      <h3 className="name">SABARI</h3>
      <p>As much as training is about making the body stronger and faster, the mind plays a huge part - and Caleb wants to help you bridge that connection. If you're looking to get motivated, have a fun time and somewhere along the way have a great workout, he can be of service! With a passion for olympic lifting and cross training, look out for a well-rounded workout with maybe too much rock music to go along with it.</p>
      </div>
      </div>
      </div>
      </div>
      </>
      );
};

export default GymTrainersPage;
