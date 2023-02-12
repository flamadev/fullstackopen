import React from 'react';

const PersonForm = ({
  handleInput,
  newName,
  handleNumber,
  handleSubmit,
  newPhone,
}) => {
  return (
    <form className="person-form" onSubmit={handleSubmit}>
      <div className="person-form_field">
        <label>Name:</label> <input onChange={handleInput} value={newName} />
      </div>
      <div className="person-form_field">
        <label>Number:</label>{' '}
        <input onChange={handleNumber} value={newPhone} />
      </div>
      <div className="person-form_button">
        <button className="button" type="submit">
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM23,16a1,1,0,0,1-1,1H19v3a1,1,0,0,1-2,0V17H14a1,1,0,0,1,0-2h3V12a1,1,0,0,1,2,0v3h3A1,1,0,0,1,23,16Z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
