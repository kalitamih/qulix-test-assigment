import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  const { handleButtons, disableBtnNext } = props;
  return (
    <div className="controlButtons">
      <button
        type="button"
        className="btn btn-default btn-prevNext"
        onClick={() => {
          handleButtons('previous');
        }}
      >
        <i className="icon-left-open-big" />
        Previous
      </button>
      <button
        type="button"
        className="btn btn-default btn-prevNext"
        disabled={disableBtnNext}
        onClick={() => {
          handleButtons('next');
        }}
      >
        Next
        <i className="icon-right-open-big" />
      </button>
    </div>
  );
}

Buttons.propTypes = {
  handleButtons: PropTypes.func.isRequired,
  disableBtnNext: PropTypes.bool.isRequired,
};

export default Buttons;
