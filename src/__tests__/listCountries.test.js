import { getWeatherAPI, getWeather } from '../redux/Country/Country';

describe('getWeatherAPI', () => {
  it('should return a function', () => {
    const result = getWeatherAPI();
    expect(typeof result).toBe('function');
  });
});

describe('getWeather', () => {
  it('should create the correct action', () => {
    const countries = ['Argentina', 'Iran'];
    const action = getWeather(countries);

    expect(action.type).toBe('weatherapp/country/GET');
    expect(action.payload).toEqual(countries);
  });
});
