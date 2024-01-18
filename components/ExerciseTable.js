import React from 'react';
import { Link } from 'react-router-dom';
import abs from '../Pictures/abs.jpg';
import bi from '../Pictures/biceps.jpg';
import tri from '../Pictures/triceps.jpg';
import ch from '../Pictures/chest.jpg';
import fo from '../Pictures/forearms.jpg';
import l from '../Pictures/lats.jpg';
import sh from '../Pictures/shol.jpg';
import q from '../Pictures/quads.webp';
import g from '../Pictures/glutes.webp';
import './ExerciseTable.css'; // Add a CSS file for styling
import { Element } from 'react-scroll';

const ExerciseTable = () => {
  const exercises = [
    { name: 'Abs', image: abs, link: '/ExerciseAbs' },
    { name: 'Biceps', image: bi, link: '/ExerciseBiceps' },
    { name: 'Triceps', image: tri, link: '/ExerciseTriceps' },
    { name: 'Chest', image: ch, link: '/ExerciseChest' },
    { name: 'Forearms', image: fo, link: '/ExerciseForearm' },
    { name: 'Shoulder', image: sh, link: '/ExerciseShoulder' },
    { name: 'Lats', image: l, link: '/lats' },
    { name: 'Quads', image: q, link: '/Quads' },
    { name: 'Glutes', image: g, link: '/Glutes' },
  ];

  const rows = [];
  const itemsPerRow = 3;

  for (let i = 0; i < exercises.length; i += itemsPerRow) {
    const rowItems = exercises.slice(i, i + itemsPerRow);

    rows.push(
      <tr key={i / itemsPerRow}>
        {rowItems.map((exercise, index) => (
          <td key={index} className="exercise-cell">
          <Element name="exercise" className="element">
          <a href={exercise.link}>
          <img src={exercise.image} alt={exercise.name} className="exercise-img" />
          <p className="exercise-name">{exercise.name}</p>
          
          </a>
          </Element>
          </td>
        ))}
      </tr>
    );
  }

  return (
    <div>
      <table className="exercise-table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ExerciseTable;