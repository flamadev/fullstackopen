import React from 'react';

const Filter = (props) => {
  return (
    <form>
      Find countries <input onChange={props.handleInputSearch} />
    </form>
  );
};

export default Filter;
