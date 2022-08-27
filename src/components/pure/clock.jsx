import React, { useEffect, useState } from 'react';
import '../../styles/clock.scss';

const Clock = () => {
  const [data, setData] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Jesus',
    apellidos: 'Cotito Vasquez'
  });

  useEffect(() => {
    const handleTick = () => {
      const edad = data.edad + 1;
      console.log(edad);
      setData({...data, fecha: new Date(), edad});
    }
    const timerID = setInterval(() => handleTick(), 1000);
    return () => {
      clearInterval(timerID);
    }
  }, [data]);

  return (
    <div>
      <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {data.nombre} {data.apellidos}
      </h3>
      <h1>
        Edad: {data.edad}
      </h1>
    </div>
  );
}

export default Clock;
