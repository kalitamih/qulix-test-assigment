import React from 'react';
import PropTypes from 'prop-types';

function Submenu(props) {
  const { handleTypeEmail } = props;
  const main = ['draft', 'trash'];
  const category = ['social', 'personal', 'forums', 'updates', 'promotions'];
  const essential = ['sent', 'spam', 'snoozed'];
  const selected = ['starred', 'important', 'unread'];
  const others = ['scheduled', 'chats'];

  const addTypes = (arr, type, title) => (
    <section className="submenuSection">
      <h4 className="submenuCategory">{title}</h4>
      <ul className="nav">
        { arr.map((item) => {
          const labelMsg = `${type}:${item}`;
          return (
            <li key={item}>
              <button type="button" onClick={() => handleTypeEmail(labelMsg)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );

  return (
    <aside className="submenu">
      {addTypes(main, 'in', '')}
      {addTypes(essential, 'in', 'Essential')}
      {addTypes(others, 'in', 'Others')}
      {addTypes(category, 'category', 'Category')}
      {addTypes(selected, 'is', 'Selected')}
    </aside>
  );
}

Submenu.propTypes = {
  handleTypeEmail: PropTypes.func.isRequired,
};

export default Submenu;
