import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { imageUrl, name, city } = props;
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoBlock">
            <a href="index.html">
              <img src="images/logotype.png" className="logo" title="Logo" alt="logo" />
              <img src="images/logotypeMobile.png" className="logoMobile" alt="logoMobile" />
            </a>
            <span>Page title</span>
          </div>
          <div className="header-comp pull-right">
            <div className="dropdown">
              <a className="dropdown-toggle" className="dropdownMenu1" data-toggle="dropdown" aria-expanded="true" href="#">
                <span>{city}</span>
                <i className="icon-down-open" />
              </a>
              <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Moscow</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Minsk</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tokio</a></li>
                <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Barcelona</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-sm btn-header">
              <i className="headerIcon icon-bell" />
            </button>
            <button type="button" className="btn btn-sm btn-header">
              <i className="headerIcon icon-mail" />
            </button>
            <a href="#" className="profile">
              <span>{name}</span>
              <img src={imageUrl} alt="profilePhoto" />
            </a>
            <button type="button" className="btn btn-xs btn-header">
              <i className="headerIcon icon-search" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Header;
