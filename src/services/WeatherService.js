import http from '../http-common';
import CountryData from '../data/countries.json';

const getAll = async () => {
  const newCountries = await Promise.all(
    CountryData.ref_country_codes.map(async (country) => {
      const { latitude: lat, longitude: lon } = country;
      const response = await http.get(`forecast?current_weather=true&latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=CST`);
      const newData = { ...country, data: response.data };
      return newData;
    }),
  );
  return newCountries;
};

const WeatherService = {
  getAll,
};

export default WeatherService;
