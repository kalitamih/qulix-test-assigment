import React from 'react';
import PropTypes from 'prop-types';

function PageTitle(props) {
  const { city } = props;
  return (
    <div className="heading">
      <h1>Page title in</h1>
      <div className="dropdown">
        <a className="dropdown-toggle" className="dropdownMenu2" data-toggle="dropdown" aria-expanded="true" href="#">
          <span>{city}</span>
          <i className="icon-down-open" />
        </a>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu2">
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Minsk</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tokio</a></li>
          <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Barcelona</a></li>
        </ul>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  city: PropTypes.string.isRequired,
};

export default PageTitle;
