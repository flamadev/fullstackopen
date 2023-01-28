import React, { useState } from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [searchValue, setSearchValue] = useState('');

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

  function handleFilter(e) {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toUpperCase().includes(searchValue.toUpperCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        handleInput={handleInput}
        newName={newName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
