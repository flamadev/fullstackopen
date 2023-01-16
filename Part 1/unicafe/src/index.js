import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      {props.total === 0 ? (
        <p>{props.message}</p>
      ) : (
        <>
          <p>Good:{props.good}</p>
          <p>Neutral:{props.neutral}</p>
          <p>Bad:{props.bad}</p>
          <p>Total:{props.total}</p>
          <p>Average:{props.average}</p>
          <p>Positive:{props.positive} %</p>
        </>
      )}
    </div>
  );
};

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

  let message = '';

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={buttonGood}>good</button>
      <button onClick={buttonNeutral}>neutral</button>
      <button onClick={buttonBad}>bad</button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalClicks}
        average={average}
        positive={positive}
      />
      {message}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
