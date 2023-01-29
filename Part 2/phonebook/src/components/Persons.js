import React from 'react';
import Person from './Person';

const Persons = (props) => {
  return (
    <ul>
      {props.filteredPersons.map((person) => (
        <Person name={person.name} number={person.number} key={person.name} />
      ))}
    </ul>
  );
};

export default Persons;
