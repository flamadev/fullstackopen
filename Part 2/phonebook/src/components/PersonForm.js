import React from 'react';

const PersonForm = ({
  handleInput,
  newName,
  handleNumber,
  handleSubmit,
  newPhone,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleInput} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumber} value={newPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
