import React from 'react'
import pic from '../Forearm/HandGripper.gif';
import pic1 from '../Forearm/wristroller.gif';
import pic2 from '../Forearm/DumbbellWristCurl.gif';
import pic3 from '../Forearm/BarbellReverseCurl.gif';
import pic4 from '../Forearm/Cable-One-Arm-Wrist-Curl-On-Floor.gif';

import './ExerciseAbs.css';
const ExerciseForearm = () => {
    return (
        <>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic} alt='workout' />
                <h2>Hand HandGrippers</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Forearms <br />
                    Equipment: Machine <br />
                    Difficulty: Beginner <br />
                    Instructions: Engage HandGripper with resistance band: Secure band around fingers and palm, squeeze gripper, and extend fingers against band resistance to strengthen hand and forearm muscles.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic1} alt='workout' />
                <h2>Wrist Roller</h2>
                <p>
                    Type: Strength <br />
                    Muscle: ForeArms<br />
                    Equipment: Machine <br />
                    Difficulty: Beginner<br />
                    Instructions: Engage in WristRoller with resistance band: Attach band to a fixed point at chest height, grasp band with both hands, extend arms forward, and roll wrists inward and outward, maintaining tension for forearm and wrist strengthening.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic2} alt='workout' />
                <h2>Dumbell Seated Neutral Wrist Curl</h2>
                <p>
                    Type: Strength<br />
                    Muscle: Dumbbells<br />
                    Equipment:  Cable, Resistance Band<br />
                    Difficulty: Beginner<br />
                    Instructions: Perform Dumbbell Seated Neutral Wrist Curl with resistance band: Sit, loop band around wrists, grasp dumbbells with neutral grip, curl wrists upward against band resistance for forearm strengthening.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic3} alt='workout' />
                <h2>Barbbell Reverse Curl</h2>
                <p>
                Exercise: Strength <br />
                Muscle Targeted: Forearm <br />
                Equipment: Barbbells <br />
                Difficulty: Intermediate <br/>
                Instruction: Conduct BarbellReverseCurl with resistance band: Secure band under feet, grasp barbell with overhand grip, curl barbell upward while maintaining wrist alignment, emphasizing brachialis and forearm muscles.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pic4} alt='workout' />
                <h2>CABLE ONEARM WRIST CURL ON FLOOR</h2>
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

export default ExerciseForearm;