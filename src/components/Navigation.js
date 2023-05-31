import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
  <header className="headerinfosection">
    <nav className="navigationheader">
      <div className="headinglist">
        <li className="itemheadinginfo">
          <Link to="/">
            {'<'}
          </Link>
        </li>
        <li className="itemheadinginfo">
          Country views
        </li>
        <li className="itemheadinginfo">
          <div className="buttonheader">
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faGear} />
          </div>
        </li>
      </div>
    </nav>
  </header>
);

export default Navigation;
