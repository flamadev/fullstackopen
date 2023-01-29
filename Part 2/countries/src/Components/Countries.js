import React from 'react';

const Countries = ({ countries, setSearchCountry }) => {
  return countries.length >= 10 ? (
    'Too many matches, specify another filter'
  ) : (
    <ul>
      {countries.map((country) => {
        const official = country.name.official;
        const name = country.name.common;
        return (
          <li key={official}>
            {name} <button onClick={() => setSearchCountry(name)}>Show</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Countries;
