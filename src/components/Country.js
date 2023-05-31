import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow_circle_right.svg';

const Country = ({
  item, fullwidth, color, background, main,
}) => {
  const { country, data, alpha2 } = item;
  return (
    <Link to={`/${country}`} className={`countrysection ${fullwidth && 'fullwidth'} ${background && 'background-light'} ${main && 'background-main'}`}>
      <img src={`https://flagcdn.com/144x108/${alpha2.toLowerCase()}.png`} alt="country flag" className={`flag ${color && 'color'}`} />
      <div className="countrydetails">
        <p className="title">{country}</p>
        <p className="temperature">
          {`${data.current_weather.temperature}°C`}
        </p>
      </div>
      <img src={arrow} alt="rightbutton" className="rightbutton" />
    </Link>
  );
};

Country.defaultProps = {
  fullwidth: false,
  color: false,
  background: false,
  main: false,
};

Country.propTypes = {
  item: PropTypes.shape().isRequired,
  fullwidth: PropTypes.bool,
  color: PropTypes.bool,
  background: PropTypes.bool,
  main: PropTypes.bool,
};

export default Country;
