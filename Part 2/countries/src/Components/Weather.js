import React, { useEffect, useState } from 'react';

const apiKEY = process.env.REACT_APP_WEATHERSTACK_API_KEY;
const apiURL = 'http://api.weatherstack.com';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${apiURL}/current?access_key=${apiKEY}&query=${country}`, {
      referrerPolicy: 'unsafe-url',
    })
      .then((response) => response.json())
      .then((weather) => setWeather(weather));
  }, [country]);
  return (
    <div>
      <h2>Weather in {country}</h2>
      {Object.keys(weather).length ? (
        <>
          <p>
            <strong>Temperature: </strong>
            {weather.current.temperature} Celsius
          </p>
          <img
            src={weather.current.weather_icons[0]}
            alt={weather.current.weather_descriptions[0]}
          />
          <p>
            <strong>Wind: </strong>
            {weather.current.wind_speed} mph direction{' '}
            {weather.current.wind_dir}
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Weather;
