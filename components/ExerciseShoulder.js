import React from 'react'
import './ExerciseAbs.css'
import clr from '../Shoulder/Cable-Lateral-Raise.gif'
import d4w from '../Shoulder/Dumbbell-4-Ways-Lateral-Raise.gif'
import dpp from '../Shoulder/Dumbbell-Push-Press.gif'
import smb from '../Shoulder/Smith-Machine-Behind-Neck-Press.gif'
import sdo from '../Shoulder/Standing-Dumbbell-Overhead-Press.gif'

const ExerciseShoulder = () => {
    return (
        <div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={clr} alt='workout' />
                <h2>CABLE LATERAL RAISE</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Shoulders <br />
                    Equipment: Resistance Band, Cable <br />
                    Difficulty: Beginner <br />
                    Instructions: Using a cable machine, stand sideways, and lift the cable to shoulder height, focusing on your side deltoids; lower the cable with control.
                    </p>
          </div>
        </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={d4w} alt='workout' />
                <h2>DUMBBELL LATERAL RAISE</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Shoulders<br />
                    Equipment: Dumbbells <br />
                    Difficulty: Beginner<br />
                    Instructions: Hold dumbbells at your sides, lift them laterally to shoulder height, keeping a slight bend in your elbows; lower with control, targeting your shoulder muscles.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={dpp} alt='workout' />
                <h2>DUMBBELL PUSH PRESS</h2>
                <p>
                    Type: Strength<br />
                    Muscle: Shoulders<br />
                    Equipment: Dumbbells<br />
                    Difficulty: Intermediate<br />
                    Instructions: Hold dumbbells at shoulder height, perform a slight dip, then explosively push the weights overhead using your legs; engage your shoulders and triceps.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={smb} alt='workout' />
                <h2>SMITH MACHINE BEHIND NECK PRESS</h2>
                <p>
                Type: Strength<br />
                Muscle Targeted: Shoulders <br />
                Equipment: Machine <br />
                Difficulty: Beginner <br/>
                Instruction: Sit or stand in a Smith machine, grip the bar behind your neck, and press it overhead, engaging your shoulders; lower the bar with control.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={sdo} alt='workout' />
                <h2>STANDING DUMBBELL SHOULDER PRESS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Shoulders  <br />
                    Equipment: Dumbbells<br />
                    Difficulty: Intermediate <br />
                    Instructions: Hold dumbbells at shoulder height, press them overhead, fully extending your arms; lower the dumbbells with control, engaging your shoulder muscl
                </p>
              </div>
          </div>
        </div>
        </div>
      );
    };

export default ExerciseShoulder