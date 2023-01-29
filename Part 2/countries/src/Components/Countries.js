import React from 'react';

const Countries = (props) => {
  return props.countries.length >= 10 ? (
    'Too many matches, specify another filter'
  ) : (
    <ul>
      {props.countries.map((country) => (
        <li key={country.name.official}> {country.name.common}</li>
      ))}
    </ul>
  );
};

export default Countries;
