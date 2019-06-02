import React from 'react';
import PropTypes from 'prop-types';

function ModalWindow(props) {
  const { modalWindow, handleWindow } = props;
  const showWindow = modalWindow ? 'modal show' : 'modal fade';
  return (
    <div className={showWindow} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleWindow}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">Add new item</h4>
          </div>
          <div className="modal-body">
            <label className="modal-label">Item name</label>
            <input type="text" className="form-control" />
            <label className="modal-label">Text</label>
            <textarea className="form-control" rows="3" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={handleWindow}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  modalWindow: PropTypes.bool.isRequired,
  handleWindow: PropTypes.func.isRequired,
};

export default ModalWindow;
