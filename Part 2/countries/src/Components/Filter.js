import React from 'react';

const Filter = (props) => {
  return (
    <form>
      Find countries{' '}
      <input
        onChange={props.handleInputSearch}
        value={props.searchInputValue}
      />
    </form>
  );
};

export default Filter;
