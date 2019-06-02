import React from 'react';
import PropTypes from 'prop-types';

function ModalWindow(props) {
  const {
    modalWindow, handleWindow, handleChange,
    recipient, subject, body, createEmail,
  } = props;
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
          <form className="modal-body" id="mail" onSubmit={createEmail}>
            <label className="modal-label">Recipient</label>
            <input
              type="email"
              className="form-control"
              value={recipient}
              onChange={handleChange}
              name="recipient"
              required
            />
            <label className="modal-label">Subject</label>
            <input
              type="text"
              className="form-control"
              value={subject}
              onChange={handleChange}
              name="subject"
            />
            <label className="modal-label">Body</label>
            <textarea
              className="form-control"
              rows="3"
              value={body}
              onChange={handleChange}
              name="body"
            />
          </form>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={handleWindow}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary" form="mail">
              Save and sent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  modalWindow: PropTypes.bool.isRequired,
  handleWindow: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  createEmail: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  recipient: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
};

export default ModalWindow;
