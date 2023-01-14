import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonGood = () => {
    setGood(() => good + 1);
  };

  const buttonNeutral = () => {
    setNeutral(() => neutral + 1);
  };

  const buttonBad = () => {
    setBad(() => bad + 1);
  };
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={buttonGood}>good</button>
      <button onClick={buttonNeutral}>neutral</button>
      <button onClick={buttonBad}>bad</button>
      <div>
        <h1>Statistics</h1>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
