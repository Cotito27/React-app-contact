import React from 'react';
import { useState } from 'react';
import useClasses from '../../hooks/useClasses';

const Rectangle = () => {
  const defaultColor = 'black';
  const [color, setColor] = useState(defaultColor);
  const classes = useClasses({
    rectangle: {
      width: '255px',
      height: '255px',
      backgroundColor: color,
    }
  });
  const getRandomRGB = () => {
    return Math.floor(Math.random() * (255 + 1));
  }
  const handleColor = () => {
    const [red, green, black] = [getRandomRGB(), getRandomRGB(), getRandomRGB()];
    setColor(`rgb(${red}, ${green}, ${black})`);
  }
  return (
    <div className={classes.rectangle} onMouseEnter={handleColor}>
      
    </div>
  );
}

export default Rectangle;
