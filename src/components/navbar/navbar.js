import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#" title="Menu item">Menu item</a></li>
            <li><a href="#" title="Menu item">Menu item</a></li>
            <li><a href="#" title="Menu item">Menu item</a></li>
            <li><a href="#" title="Menu item" className="active">Menu item</a></li>
            <li><a href="#" title="Menu item">Menu item</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
