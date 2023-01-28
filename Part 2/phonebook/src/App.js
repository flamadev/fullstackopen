import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const isSameName = persons.some(
      (person) => person.name.toUpperCase() === newName.toUpperCase()
    );
    if (isSameName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, phone: newPhone }]);
  }

  function handleNumber(e) {
    const valuePhone = e.target.value;
    setPhone(valuePhone);
  }

  function handleInput(e) {
    const valueName = e.target.value;
    setNewName(valueName);
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {`${person.name}
            ${person.phone}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
