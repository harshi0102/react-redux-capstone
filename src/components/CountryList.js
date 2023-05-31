import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherAPI } from '../redux/Country/Country';
import Country from './Country';
import Loading from './LoadingStage';

const CountryList = () => {
  const [primaryCountry, setPrimaryCountry] = useState(Math.floor(Math.random() * 243));
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [screenedCountries, setScreenedCountries] = useState([]);

  useEffect(() => {
    setPrimaryCountry(Math.floor(Math.random() * 243));
    dispatch(getWeatherAPI());
  }, [dispatch]);

  const OnInputChange = (e) => {
    const search = e.target.value.toLowerCase();
    const screenedCountries = countries.filter((country) => {
      const lowerCaseCountry = country.country.toLowerCase();
      return lowerCaseCountry.includes(search);
    });
    setScreenedCountries(screenedCountries);
  };

  const displayedCountries = screenedCountries.length > 0 ? screenedCountries : countries;

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Country item={countries[primaryCountry]} fullwidth color main />
          <div className="homecontainer">
            <p className="homeinfotitle">WEATHER BY COUNTRY</p>
            <input
              type="text"
              onChange={OnInputChange}
              className="searchbox"
              placeholder="Search by country"
            />
          </div>
          <div className="countriessection">
            {displayedCountries.map((country, index) => (
              <Country
                key={country.alpha3}
                item={country}
                background={(index + 1) % 4 === 0 || (index + 4) % 4 === 0 || index === 0}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryList;
