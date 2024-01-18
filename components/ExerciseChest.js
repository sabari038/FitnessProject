import React from 'react'
import d from '../chest/Cable-Upper-Chest-Crossovers.gif'
import e from '../chest/DumbbellPress.gif'
import f from '../chest/Inclinepress.gif'
import g from '../chest/Incline-dumbbell-Fly.gif'
import h from '../chest/Machinefly.gif'
import './ExerciseAbs.css'

const ExerciseChest = () => {
    return (
        <>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={e} alt='workout' />
                <h2>DUMBBELL BENCH PRESS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Upper Chest <br />
                    Equipment: Bench, Dumbbells <br />
                    Difficulty: Beginner <br />
                    Instructions: Lie on a flat bench, hold a dumbbell in each hand at chest level, and press them upward until your arms are fully extended. Lower the dumbbells back to the starting position. Keep your core engaged and maintain proper form through
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={f} alt='workout' />
                <h2>INCLINE DUMBBELL PRESS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Chest<br />
                    Equipment: Dumbbells <br />
                    Difficulty: Beginner<br />
                    Instructions: Lie on an incline bench, holding dumbbells at chest level, and press upward targeting the upper chest; lower with control.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={g} alt='workout' />
                <h2>INCLINE DUMBBELL FLY</h2>
                <p>
                    Type: Strength<br />
                    Muscle: Chest<br />
                    Equipment: Dumbbells<br />
                    Difficulty: Intermediate<br />
                    Instructions: On an incline bench, open arms wide, lowering dumbbells to sides, then squeeze chest to bring them back up.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={h} alt='workout' />
                <h2>MACHINE FLY</h2>
                <p>
                Exercise: Machine Fly <br />
                Muscle Targeted: Chest, Shoulders <br />
                Equipment: Machine <br />
                Difficulty: Beginner <br/>
                Instruction: Sit on the machine, adjust handles to chest height, and bring them together in a controlled motion, squeezing your chest at the peak.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={d} alt='workout' />
                <h2>CABLE UPPER CHEST CROSSOVERS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Upper Chest <br />
                    Equipment: Cable Machine <br />
                    Difficulty: Intermediate <br />
                    Instructions: Set up a cable machine with the cables positioned above your shoulders. Stand in the center, grab the handles with your hands crossed in front of you, and step forward slightly. Keep a slight bend in your elbows, then bring your hands down and together in a controlled manner, focusing on squeezing your upper chest. Return to the starting position and repeat.
                </p>
              </div>
          </div>
        </div>
        </>
      );
    };

export default ExerciseChest