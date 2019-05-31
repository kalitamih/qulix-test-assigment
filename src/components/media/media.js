import React from 'react';
import PropTypes from 'prop-types';


function Media(props) {
  const { mailData } = props;
  return (
    <section className="media">
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{mailData.From}</span>
          <div className="commentsAndTime pull-right">
            <span>
              <i className="icon-clock" />
              <time>{mailData.Date}</time>
            </span>
          </div>
        </div>
        <div className="itemName">
          <button type="button" className="media-heading" title="Item title">{mailData.Subject}</button>
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
    Date: PropTypes.string,
    From: PropTypes.string,
    Subject: PropTypes.string,
    snippet: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.oneOf(
      [
        'UNREAD', 'CATEGORY_SOCIAL', 'INBOX',
        'CATEGORY_UPDATES', 'CATEGORY_PERSONAL',
        'CATEGORY_PROMOTIONS', 'IMPORTANT',
        'TRASH', 'SPAM', 'STARRED',
        'SENT', 'DRAFT', 'CATEGORY_PROMOTIONS',
        'CATEGORY_UPDATES', 'CATEGORY_FORUMS',
      ],
    )),
  }).isRequired,
};

export default Media;
