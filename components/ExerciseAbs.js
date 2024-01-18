import React from 'react'
import pic from '../abs/DragonFlag.gif';
import pic1 from '../abs/CrossCrunch.gif';
import pic2 from '../abs/CableCrunch.gif';
import pic3 from '../abs/Twistdownup.gif';
import pic4 from '../abs/HellSlide.gif';
import './ExerciseAbs.css';
const ExerciseAbs = () => {
    return (
        <>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic} alt='workout' />
                <h2>Dragon Flag</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Abs, Calisthenic <br />
                    Equipment: Bench, NO EQUIPMENT <br />
                    Difficulty: Beginner <br />
                    Instructions: Lie on a flat bench, grasp the sides with your hands, lift your legs and torso together until your body forms a straight line, then lower them back down without letting your feet touch the ground.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic1} alt='workout' />
                <h2>Cross Crunch</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Abs<br />
                    Equipment: No Gym <br />
                    Difficulty: Beginner<br />
                    Instructions: Perform CrossCrunches by lying on your back, lifting opposite elbow and knee towards each other, engaging core muscles for a dynamic abdominal workout.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic2} alt='workout' />
                <h2>Cable Crunch</h2>
                <p>
                    Type: Strength<br />
                    Muscle: Abs<br />
                    Equipment: Cable<br />
                    Difficulty: Intermediate<br />
                    Instructions: Sit on the floor, legs extended, loop a cable around a high pulley, grasp handles with both hands crossing over, and crunch forward, bringing elbows towards knees for an effective Cable Crunch.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic3} alt='workout' />
                <h2>Twist Down-Up</h2>
                <p>
                Exercise: Strength <br />
                Muscle Targeted: Abs <br />
                Equipment: Resistance Band <br />
                Difficulty: Beginner <br/>
                Instruction: Perform TwistDownUp with resistance band: Sit with legs extended, loop band around feet, hold ends with both hands, twist torso to one side, then hinge at hips to touch the band to the floor, return to starting position, and repeat on the other side.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic4} alt='workout' />
                <h2>Hell Slide</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Abs, leg<br />
                    Equipment: No Equipment <br />
                    Difficulty: Beginner <br />
                    Instructions: Perform HellSlide with resistance band: Secure band around ankles, assume plank position, slide one foot outward, then bring it back to center; repeat on the other side, maintaining tension on the band throughout.
                </p>
              </div>
          </div>
        </div>
        </>
      );
    };

export default ExerciseAbs