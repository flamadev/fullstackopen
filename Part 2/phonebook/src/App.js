import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  function handleSubmit(e) {
    e.preventDefault();
    const isSameName = persons.some(
      (person) => person.name.toUpperCase() === newName.toUpperCase()
    );
    if (isSameName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersons = [...persons, { name: newName, phone: newPhone }];
    setPersons(newPersons);
    setFilteredPersons(newPersons);
  }

  function handleNumber(e) {
    const valuePhone = e.target.value;
    setPhone(valuePhone);
  }

  function handleInput(e) {
    const valueName = e.target.value;
    setNewName(valueName);
  }

  function handleFilter(e) {
    const searchValue = e.target.value;
    if (!searchValue.length) {
      setFilteredPersons(persons);
      return;
    }

    setFilteredPersons(filteredPersons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter show with: <input onChange={handleFilter} />
      <h2>add a new</h2>
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
        {filteredPersons.map((person) => (
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
