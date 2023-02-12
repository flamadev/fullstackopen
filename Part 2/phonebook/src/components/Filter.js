import React from 'react';

const Filter = (props) => {
  return (
    <div className="filter-container">
      Filter show with: <input onChange={props.handleFilter} />
    </div>
  );
};

export default Filter;
