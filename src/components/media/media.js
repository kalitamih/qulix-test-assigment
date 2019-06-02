import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORY } from '../../constants';

function Media(props) {
  const { mailData, handleSelectEmail } = props;
  return (
    <section className="media">
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{mailData.From}</span>
          <div className="commentsAndTime pull-right">
            <label htmlFor={mailData.id} className="containerCheckbox">
              <input type="checkbox" id={mailData.id} onChange={handleSelectEmail} />
              <span className="checkmark" />
            </label>
            <span>
              <i className="icon-clock" />
              <time>{mailData.Date}</time>
            </span>
          </div>
        </div>
        <div className="itemName">
          <button type="button" className="media-heading" title="Item title">
            {mailData.Subject}
          </button>
        </div>
        <p>
          {mailData.snippet}
        </p>
        <div className="tags">
          <button type="submit" className="btn btn-tag">
            <i className="icon-tag" />
          </button>
          {
            mailData.tag.map((item, index) => {
              const key = `mailData-${index}`;
              return <a href="#" key={key} className="tag" title="tag">{item}</a>
            })
          }
        </div>
      </div>
    </section>
  );
}

Media.propTypes = {
  mailData: PropTypes.shape({
    id: PropTypes.string,
    Date: PropTypes.string,
    From: PropTypes.string,
    Subject: PropTypes.string,
    snippet: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.oneOf(
      CATEGORY,
    )),
  }).isRequired,
  handleSelectEmail: PropTypes.func.isRequired,
};

export default Media;
