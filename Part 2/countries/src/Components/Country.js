import Weather from './Weather';

const Country = ({ country }) => {
  const languages = Object.values(country.languages);
  const countryName = country.name.common;
  const capital = country.capital[0];
  const population = country.population;
  const imrUrl = country.flags.png;

  return (
    <div>
      <h2>{countryName}</h2>
      <p>capital: {capital}</p>
      <p>population: {population}</p>
      <h3>Languages</h3>
      <ul>
        {languages.map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>

      <img src={imrUrl} alt="flag" />
      <Weather country={countryName} />
    </div>
  );
};

export default Country;
