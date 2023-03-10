import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  let [votes, setVotes] = useState([...anecdotes].fill(0));
  const randonButton = () => {
    const randomIndex = Math.floor(Math.random() * (anecdotes.length - 0));
    setSelected(randomIndex);
  };
  const counterVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };
  const maxVotes = Math.max(...votes);
  const maxVotedIndex = votes.findIndex((element) => element === maxVotes);
  const mostVtedAnecdotes = anecdotes[maxVotedIndex];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votos : {votes[selected]}</p>
      <div>
        <button onClick={counterVotes}>Vote</button>
        <button onClick={randonButton}>Next anecdote</button>
      </div>
      <h1>Anecdote with most votes:</h1>
      <p>{mostVtedAnecdotes}</p>
      <p>Has {maxVotes} votes</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
