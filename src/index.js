import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [name, setName] = useState('Jan');
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Will')}>
        Change Winner
      </button>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);