import React from 'react';

function PageTitle() {
  return (
    <div className="heading">
      <h1>Page title in</h1>
      <div className="dropdown">
        <a className="dropdown-toggle" className="dropdownMenu2" data-toggle="dropdown" aria-expanded="true" href="#">
          <span>New York</span>
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

export default PageTitle;
