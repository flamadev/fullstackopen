import React from 'react';

const Filter = (props) => {
  return (
    <div>
      filter show with: <input onChange={props.handleFilter} />
    </div>
  );
};

export default Filter;
