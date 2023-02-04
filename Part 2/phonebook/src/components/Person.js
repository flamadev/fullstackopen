import React from 'react';

const Person = (props) => {
  return (
    <>
      <li>
        {`${props.name}
            ${props.number}`}
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
      </li>
    </>
  );
};

export default Person;
