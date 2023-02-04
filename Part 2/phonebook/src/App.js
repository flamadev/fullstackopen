import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './components/services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    personService.getPersons().then((data) => setPersons(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const isSameName = persons.some(
      (person) => person.name.toUpperCase() === newName.toUpperCase()
    );
    if (isSameName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newPhone,
    };

    personService
      .createPerson(newPerson)
      .then((lastPersonAdded) => setPersons([...persons, lastPersonAdded]));
    setNewName('');
    setPhone('');
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

  function handleDelete(id) {
    const indexDelete = persons.findIndex((person) => person.id === id);
    const idPersonDelete = persons[indexDelete].id;
    if (window.confirm(`Delete ${persons[indexDelete].name}?`)) {
      personService.deletePerson(idPersonDelete);
      setPersons(persons.filter((person) => person.id !== idPersonDelete));
    }
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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
