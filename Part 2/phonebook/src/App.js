import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/personsService';
import Message from './components/Message';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [textMessage, setTextMessage] = useState(null);
  useEffect(() => {
    personService.getPersons().then((data) => setPersons(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const indexName = persons.findIndex(
      (person) => person.name.toUpperCase() === newName.trim().toUpperCase()
    );
    const newPerson = {
      name: newName.trim(),
      number: newPhone,
    };
    if (indexName === -1) {
      if (newPhone === '') return alert('Add a phone number');
      personService.createPerson(newPerson).then((lastPersonAdded) => {
        setPersons([...persons, lastPersonAdded]);
        newName
          ? setTextMessage(`Added ${newName}`)
          : setTextMessage(`Added ${newPhone}`);
        setTimeout(() => setTextMessage(null), 3000);
      });

      setNewName('');
      setPhone('');
      return setPersons([...persons, newPerson]);
    }

    if (
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const updatePerson = { ...persons[indexName], number: newPhone };
      personService
        .putPerson(updatePerson)
        .then((updatePerson) => {
          const updatedPersons = persons.map((person) =>
            person.id === updatePerson.id ? updatePerson : person
          );
          setPersons(updatedPersons);
        })
        .catch((error) =>
          setTextMessage(`There was an error, please try again.`)
        );
      setTimeout(() => setTextMessage(null), 2000);
    } else {
      setNewName('');
      setPhone('');
    }
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
      setTextMessage(
        `Information of ${persons[indexDelete].name}has already been remove from server`
      );
      setTimeout(() => setTextMessage(null), 3000);
      personService.deletePerson(idPersonDelete);

      setPersons(persons.filter((person) => person.id !== idPersonDelete));
    }
  }
  const filteredPersons = persons.filter((person) =>
    person.name.toUpperCase().includes(searchValue.toUpperCase())
  );
  return (
    <div className="app">
      <div className="message">
        <Message>{textMessage}</Message>
      </div>
      <h1>Phonebook</h1>
      <div className="container">
        <Filter handleFilter={handleFilter} />
        <div className="person-form-container">
          <h2>Add a new</h2>
          <PersonForm
            handleInput={handleInput}
            newName={newName}
            handleNumber={handleNumber}
            handleSubmit={handleSubmit}
            newPhone={newPhone}
          />
        </div>
        <div className="persons-container">
          <h2>Contacts</h2>
          <Persons
            filteredPersons={filteredPersons}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
