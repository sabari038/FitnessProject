import React from 'react'
import './ExerciseAbs.css'
import bd from '../tri/Bench-Dips.gif'
import td from '../tri/Triceps-Dips.gif'
import pd from '../tri/Pushdown.gif'
import oap from '../tri/One-arm-pushdown.gif'
import ng from '../tri/Narrow-Grip-Wall-Push-Up.gif'

const ExerciseTriceps = () => {
    return (
        <>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={bd} alt='workout' />
                <h2>BENCH DIPS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Triceps, Chest<br />
                    Equipment:  Bench or Parallel Bars<br />
                    Difficulty: Beginner to Intermediate <br />
                    Instructions:  Position your hands on a bench or parallel bars, lower your body by bending your elbows, then push back up, engaging your triceps and chest.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={td} alt='workout' />
                <h2>TRICEPS DIPS DIPS</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Triceps<br />
                    Equipment: Machine, NO EQUIPMENT<br />
                    Difficulty: Beginner to Intermediate <br />
                    Instructions:  Position your hands on a bench or parallel bars, lower your body by bending your elbows, then push back up, engaging your triceps and chest.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={pd} alt='workout' />
                <h2>PUSHDOWN</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Triceps<br />
                    Equipment: Cable<br />
                    Difficulty: Beginner to Intermediate <br />
                    Instructions:  Using a cable machine and a straight bar attachment, stand upright and push the bar down towards your thighs, engaging your triceps; return to the starting position.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={oap} alt='workout' />
                <h2>ONE ARM PUSHDOWN</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Triceps<br />
                    Equipment: Cable<br />
                    Difficulty: Beginner to Intermediate <br />
                    Instructions: With a cable machine and single-hand attachment, stand upright, and push the cable down with one arm, targeting your triceps; return to the starting position.
                </p>
              </div>
          </div>
        </div>
        <div className="exercise-grid">
          <div className="grid-container">
              <div className="exercise-card">
                <img src={ng} alt='workout' />
                <h2>NARROW GRIP WALL PUSH-UP</h2>
                <p>
                    Type: Strength <br />
                    Muscle: Triceps<br />
                    Equipment: No equipment<br />
                    Difficulty: Beginner <br />
                    Instructions: Stand facing a wall, place your hands close together, perform a push-up, engaging your triceps and chest; maintain a narrow grip throughout.
                </p>
              </div>
          </div>
        </div>
        </>
      );
    };

export default ExerciseTriceps