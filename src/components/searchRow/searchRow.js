import React from 'react';
import PropTypes from 'prop-types';

function SearchRow(props) {
  const {
    handleChange, value, handleSearch, handleDelele,
  } = props;
  return (
    <div className="searchForm row">

      <div className="col-sm-14">
        <form
          name="search"
          action="#"
          method="get"
          onSubmit={handleSearch}
          className="form-inline form-search pull-left"
        >
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              name="search"
              value={value}
              onChange={handleChange}
              placeholder="Search..."
            />
            <button type="submit" className="btn btn-search">
              <i className="icon-search" />
            </button>
          </div>
        </form>
      </div>

      <div className="options col-sm-10">
        <button type="button" title="Add new item" className="newItem">
          <i className="icon-plus-small" />
          <span>New Item</span>
        </button>

        <button
          type="button"
          className="btn btn-sm btn-option"
          onClick={handleDelele}
        >
          <i className="icon-trash" />
        </button>
      </div>
    </div>

  );
}

SearchRow.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDelele: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default SearchRow;
