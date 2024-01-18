import React from 'react'
import pic from '../Biceps/DoubleArmDumbbellCurl.gif';
import pic1 from '../Biceps/StandingBarbellConcentrationCurl.gif';
import pic2 from '../Biceps/OneArmCableBicepCurl.gif';
import pic3 from '../Biceps/WaterBottleHammerCurl.gif';
import pic4 from '../Biceps/BrachialisPullup.gif';
import './ExerciseAbs.css';
const ExerciseBiceps = () => {
    return (
        <>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic} alt='workout' />
                <h2>Double Arm Dumbell Curls</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Biceps <br />
                    Equipment: Dumbells <br />
                    Difficulty: Beginner <br />
                    Instructions: Execute Doubles Arm Dumbbell Curl with resistance band: Stand on the band, hold dumbbells in each hand, and perform bicep curls while maintaining resistance from the band.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic1} alt='workout' />
                <h2>Standing Barbell Concentration Curl</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Biceps<br />
                    Equipment: Barbells <br />
                    Difficulty: Intermediate<br />
                    Instructions: Execute Standing Barbell Concentration Curl with resistance band: Stand on the band, grasp both ends, keep elbows against sides, perform curling motion with the band while maintaining tension.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic2} alt='workout' />
                <h2>One Arm Cable Bicep Curl</h2>
                <p>
                    Type: Strength<br />
                    Muscle: Biceps<br />
                    Equipment: Cable, Resistance Band<br />
                    Difficulty: Beginner<br />
                    Instructions: Execute One-Arm Cable Bicep Curl with resistance band: Anchor band low, stand on one end, grab other end with one hand, and perform bicep curls while keeping elbow stationary.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic3} alt='workout' />
                <h2>Water Bottle Hammer Curl</h2>
                <p>
                Exercise: Strength <br />
                Muscle Targeted: Biceps <br />
                Equipment: No Equipment <br />
                Difficulty: Beginner <br/>
                Instruction: Execute WaterBottleHammerCurl with resistance band: Stand on band, grip ends with a neutral grip, and perform hammer curls, mimicking the motion with water bottles as resistance.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic4} alt='workout' />
                <h2>Brachialis Pullups</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Biceps<br />
                    Equipment: Stationary Bar <br />
                    Difficulty: Intermediate <br />
                    Instructions: Execute BrachialisPullup with resistance band: Attach band to pull-up bar, loop around wrists, grip bar with palms facing you, perform pull-up while keeping elbows close to body for targeted brachialis engagement.
                </p>
              </div>
          </div>
        </div>
        </>
      );
    };

export default ExerciseBiceps;