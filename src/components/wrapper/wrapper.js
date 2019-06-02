import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Loader from '../loader';
import Navbar from '../navbar';
import Submenu from '../submenu';
import PageTitle from '../pageTitle';
import SearchRow from '../searchRow';
import Media from '../media';
import Buttons from '../buttons';
import Footer from '../footer';
import { CATEGORY } from '../../constants';

function Wrapper(props) {
  const {
    mailArr, value, createEmail,
    disableBtnNext, imageUrl, name,
    loading, error, handleButtons,
    handleChange, handleSearch, handleDelete,
    handleTypeEmail, handleSelectEmail,
    modalWindow, handleWindow,
    recipient, subject, body,
  } = props;
  return (
    <div className="wrapper">
      <Header imageUrl={imageUrl} name={name} />
      <Navbar />
      <main className="container main">
        <Submenu handleTypeEmail={handleTypeEmail} />
        <section className="mainSection">
          <PageTitle />
          <SearchRow
            value={value}
            handleChange={handleChange}
            handleSearch={handleSearch}
            handleDelele={handleDelete}
            handleWindow={handleWindow}
            createEmail={createEmail}
            modalWindow={modalWindow}
            recipient={recipient}
            subject={subject}
            body={body}
          />
          <section className="postsContainer">
            {error && <h1 className="error-message">Something is wrong! Reload the page!</h1>}
            {(!loading && !error) && mailArr.map((item, index) => {
              const key = `media-${index}`;
              return (
                <Media
                  key={key}
                  mailData={item}
                  handleSelectEmail={handleSelectEmail}
                />
              );
            })}
            {(loading && !error) && <Loader />}
          </section>
          <Buttons
            handleButtons={handleButtons}
            disableBtnNext={disableBtnNext}
          />
          <Footer />
        </section>
      </main>
    </div>
  );
}

Wrapper.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleButtons: PropTypes.func.isRequired,
  createEmail: PropTypes.func.isRequired,
  handleSelectEmail: PropTypes.func.isRequired,
  handleTypeEmail: PropTypes.func.isRequired,
  handleWindow: PropTypes.func.isRequired,
  disableBtnNext: PropTypes.bool.isRequired,
  modalWindow: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  recipient: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  mailArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    Date: PropTypes.string,
    From: PropTypes.string,
    Subject: PropTypes.string,
    snippet: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.oneOf(
      CATEGORY,
    )),
  })).isRequired,
};

export default Wrapper;
