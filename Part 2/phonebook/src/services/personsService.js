import axios from 'axios';

const url = 'https://fullstackopen-backend-phonebook-dev-brmx.1.ie-1.fl0.io';

function getPersons() {
  return axios.get(`${url}/api/persons`).then((response) => response.data);
}

function createPerson(newPerson) {
  return axios
    .post(`${url}/api/persons`, newPerson)
    .then((response) => response.data);
}

function deletePerson(id) {
  return axios
    .delete(`${url}/api/persons/${id}`)
    .then((response) => response.data);
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
