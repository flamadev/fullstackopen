import React from 'react';

const Person = (props) => {
  return (
    <li>
      {`${props.name}
            ${props.number}`}
    </li>
  );
};

export default Person;
