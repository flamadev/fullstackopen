import React from 'react';

const Person = (props) => {
  return (
    <li>
      {`${props.name}
            ${props.phone}`}
    </li>
  );
};

export default Person;
