import { fetchWeatherAPI, fetchWeather } from '../redux/Country/Country';

it('Expects getWeatherAPI get a function', () => {
  let countries = [];
  countries = fetchWeatherAPI();
  expect(typeof countries).toBe('function');
});
it('asd', () => {
  const countries = ['Argentina', 'Iran'];
  const getCountries = fetchWeather(countries);
  expect(countries.length).toBe(2);
  expect(getCountries.type).toBe('weatherapp/country/GET');
});
