import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || input1.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      setShowCard(false);
      return;
    }

    setError('');
    setShowCard(true);
    setInput1('');
    setInput2('');
  };

  return (
    <div>
      {!showCard && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="input1"></label>
            <input
              type="text"
              id="input1"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Nombre"
            />
          </div>
          <div>
            <label htmlFor="input2"></label>
            <input
              type="text"
              id="input2"
              value={input2}
              placeholder="Canción"
              onChange={(e) => setInput2(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
      {showCard && <Card input1={input1} input2={input2} />}
    </div>
  );
};

export default Formulario;