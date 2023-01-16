import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const Statistic = (props) => (
  <tr>
    <td>{props.texto}</td>
    <td>
      {props.value} {props.texto === 'Positive:' ? '%' : ''}
    </td>
  </tr>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.value}</button>
);

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      {props.total === 0 ? (
        <p>{'No feedback given'}</p>
      ) : (
        <table>
          <tbody>
            <Statistic texto="Good:" value={props.good} />
            <Statistic texto="Neutral:" value={props.neutral} />
            <Statistic texto="Bad:" value={props.bad} />
            <Statistic texto="Total:" value={props.total} />
            <Statistic texto="Average:" value={props.average} />
            <Statistic texto="Positive:" value={props.positive} />
          </tbody>
        </table>
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

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={buttonGood} value={'Good'} />
      <Button handleClick={buttonNeutral} value={'Neutral'} />
      <Button handleClick={buttonBad} value={'Bad'} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalClicks}
        average={average}
        positive={positive}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
