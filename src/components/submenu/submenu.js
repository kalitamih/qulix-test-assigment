import React from 'react';

function Submenu() {
  return (
    <aside className="submenu">
      <section className="submenuSection">
        <ul className="nav">
          <li><a href="#" title="Submenu">Submenu item 7d</a></li>
          <li><a href="#" title="Submenu">Submenu item 5d</a></li>
        </ul>
      </section>
      <section className="submenuSection">
        <h4 className="submenuCategory">Submenu</h4>
        <ul className="nav">
          <li><a href="#" title="Submenu">Submenu item 7d</a></li>
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 4d</a></li>
          <li><a href="#" title="Submenu">More tags</a></li>
        </ul>
      </section>

      <section className="submenuSection">
        <h4 className="submenuCategory">Submenu</h4>
        <ul className="nav">
          <li><a href="#" title="Submenu" className="active">Submenu item 1d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
        </ul>
      </section>

      <section className="submenuSection">
        <h4 className="submenuCategory">Submenu</h4>
        <ul className="nav">
          <li><a href="#" title="Submenu">Submenu item 4d</a></li>
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 7d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
        </ul>
      </section>

      <section className="submenuSection">
        <h4 className="submenuCategory">Submenu</h4>
        <ul className="nav">
          <li><a href="#" title="Submenu">Submenu item 2d</a></li>
          <li><a href="#" title="Submenu">Submenu item 1d</a></li>
          <li><a href="#" title="Submenu">Submenu item 3d</a></li>
        </ul>
      </section>

    </aside>
  );
}

export default Submenu;
