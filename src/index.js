import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Checkbox with useState</h1>
      <input type='checkbox' value={checked} onChange={() => setChecked((checked) => !checked)}/>
      <p>{(checked) ? "checked" : "Not checked"}</p>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);