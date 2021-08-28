import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [status, setStatus] = useState('Not delivered');
  console.log(status);
  return (
    <>
      <h1>The package is: {status}.</h1>
      <button onClick={() => {setStatus("Delivered")}}>Deliver</button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);