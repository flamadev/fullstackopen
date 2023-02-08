import axios from 'axios';

const url = 'http://localhost:3001/persons';

function getPersons() {
  return axios.get(url).then((response) => response.data);
}

function createPerson(newPerson) {
  return axios.post(url, newPerson).then((response) => response.data);
}

function deletePerson(id) {
  return axios.delete(`${url}/${id}`).then((response) => response.data);
}

function putPerson(person) {
  return axios
    .put(`${url}/${person.id}`, person)
    .then((response) => response.data);
}

const personService = {
  getPersons,
  createPerson,
  deletePerson,
  putPerson,
};
export default personService;
