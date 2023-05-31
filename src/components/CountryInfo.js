import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import WeatherDayInfo from './WeatherDayInfo';

const CountryInfo = () => {
  const [detailData, setDetailData] = useState(null);
  const { country } = useParams();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries && countries.length > 0) {
      const data = countries.find((item) => item.country === country);
      if (data) {
        setDetailData(data);
      }
    }
  }, [countries, country]);

  if (!countries) {
    return <div>Loading...</div>;
  }

  if (!detailData) {
    return <div>Country not found</div>;
  }

  const { alpha2, data } = detailData;
  return (
    <div className="detailsection">
      <div className="detailinfo">
        <img
          src={`https://flagcdn.com/144x108/${alpha2?.toLowerCase()}.png`}
          alt=""
          className="detail-country-flag"
        />
        <div className="infocountrycontent">
          <img
            src={`./assets/images/${data.current_weather.weathercode}.png`}
            alt="weather icon"
            className="weather-icon"
          />
          <div className="info-text">
            <p className="infocountrytitle">{detailData.country}</p>
            <p className="infotempreature">{`Temperature: ${data.current_weather.temperature}°C`}</p>
            <p className="infotempreature">{`Wind: ${data.current_weather.windspeed} km/h`}</p>
          </div>
        </div>
      </div>
      <div className="homecontainer background-dark">
        <p className="homeinfotitle">TEMPERATURES BY DAYS</p>
      </div>
      <ul className="homeinfosection">
        {data.daily.time.map((time, index) => (
          <WeatherDayInfo
            time={time}
            key={time}
            min={data.daily.temperature_2m_min[index]}
            max={data.daily.temperature_2m_max[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountryInfo;
