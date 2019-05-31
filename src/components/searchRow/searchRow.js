import React from 'react';
import PropTypes from 'prop-types';

function SearchRow(props) {
  const { handleChange, value, handleSearch } = props;
  return (
    <div className="searchForm row">

      <div className="col-sm-14">
        <form name="search" action="#" method="get" onSubmit={handleSearch} className="form-inline form-search pull-left">
          <div className="input-group">
            <input className="form-control" type="text" name="search" value={value} onChange={handleChange} placeholder="Search..." />
            <button type="submit" className="btn btn-search">
              <i className="icon-search" />
            </button>
          </div>
        </form>
      </div>

      <div className="options col-sm-10">
        <a href="#" title="Add new item" className="newItem" data-toggle="modal" data-target="#myModal">
          <i className="icon-plus-small" />
          <span>New Item</span>
        </a>

        <button type="button" className="btn btn-sm btn-option">
          <i className="icon-sliders" />
        </button>
      </div>
    </div>

  );
}

SearchRow.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default SearchRow;
