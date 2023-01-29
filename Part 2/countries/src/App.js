import './App.css';
import { useState } from 'react';
import Filter from './Components/Filter';
import Country from './Components/Country';
import Countries from './Components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const URL_API_COUNTRIES = 'https://restcountries.com/v3.1';

  function handleInputSearch(e) {
    fetch(`${URL_API_COUNTRIES}/all`)
      .then((response) => response.json())
      .then((countries) => setCountries(countries));
    setSearchCountry(e.target.value);
  }
  let countriesToShow = [];
  for (const country of countries) {
    const name = country.name.common;
    if (name.toUpperCase() === searchCountry.toUpperCase()) {
      countriesToShow = [country];
      break;
    }
    if (name.toUpperCase().includes(searchCountry.toUpperCase()))
      countriesToShow.push(country);
  }

  return (
    <div>
      <Filter handleInputSearch={handleInputSearch} />
      {countriesToShow.length === 1 ? (
        <Country country={countriesToShow[0]} />
      ) : (
        <Countries countries={countriesToShow} />
      )}
    </div>
  );
}

export default App;
