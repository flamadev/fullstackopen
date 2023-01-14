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

  const totalClicks = good + neutral + bad;
  const average = totalClicks / 3;
  const positive = totalClicks === 0 ? 0 : (good * 100) / totalClicks;

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
        <p>Total:{totalClicks}</p>
        <p>Average:{average}</p>
        <p>Positive:{positive} %</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
