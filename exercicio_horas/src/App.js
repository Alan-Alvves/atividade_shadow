import React, { useState, useEffect } from 'react';


function Horario() {
  const [horas, setHoras] = useState(new Date);

  useEffect(() => {setHoras((new Date()), 1000)
  });

  return (
    <div>
      <h1>Hellow World</h1>
      <h2>Hoje é {horas.toLocaleDateString()}</h2>
      <h2>Agora são {horas.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Horario;
