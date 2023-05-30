import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header-container">
    <nav className="navigationheader">
      <div className="headinglist">
        <ListItem>
          <Link to="/">
            {'<'}
          </Link>
        </ListItem>
        <ListItem>
          Country views
        </ListItem>
        <ListItem>
          <div className="buttonheader">
            <i className="fa-solid fa-microphone" />
            <i className="fa-solid fa-gear" />
          </div>
        </ListItem>
      </div>
    </nav>
  </header>
);

const ListItem = ({ children }) => <li className="itemheadinginfo">{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
