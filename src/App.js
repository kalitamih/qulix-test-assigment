import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Header from './components/header';
import Loader from './components/loader';
import Navbar from './components/navbar';
import Submenu from './components/submenu';
import PageTitle from './components/pageTitle';
import SearchRow from './components/searchRow';
import Media from './components/media';
import Buttons from './components/buttons';
import Footer from './components/footer';
import handleEmail from './data/handleEmail';
import deleteMail from './data/deleteMail';

class App extends Component {
  state = {
    token: '',
    email: '',
    name: '',
    imageUrl: '',
    pageToken: [],
    messages: [],
    page: 1,
    mailData: [],
    value: '',
    search: '',
    endMail: false,
    disableBtnNext: false,
    loading: false,
    error: false,
    deleted: [],
  }

  responseGoogle = (response) => {
    const { accessToken, profileObj } = response;
    const { email, name, imageUrl } = profileObj;
    const { search } = this.state;
    this.setState({
      token: accessToken, email, name, imageUrl,
    });
    this.getList(email, 'pageToken=', accessToken, search);
  }

  getList = (email, nextPage, accessToken, filter) => {
    const gmailAddr = 'https://www.googleapis.com/gmail/v1/users/';
    const maxResults = 'maxResults=8';
    const request = `${gmailAddr}${email}/messages`;
    const reqListMail = `${request}?${maxResults}&${nextPage}&access_token=${accessToken}&q=${filter}`;
    this.setState({ loading: true, error: false });
    console.log(reqListMail);
    fetch(reqListMail)
      .then(body => body.json())
      .then((data) => {
        const { messages, pageToken } = this.state;
        if (data.nextPageToken) pageToken.push(data.nextPageToken);
        else this.setState({ endMail: true });
        if (Object.keys(data).length > 1) {
          const messagesArr = [...messages, ...data.messages];
          this.setState({
            pageToken,
            messages: messagesArr,
          });
          return data.messages;
        }
        return [];
      })
      .then((data) => {
        const arr = [];
        const { endMail, page, messages } = this.state;
        if (endMail && page >= Math.ceil(messages.length / 4)) {
          this.setState({ disableBtnNext: true });
        }
        for (let i = 0; i < data.length; i += 1) {
          arr.push(
            handleEmail(
              `${request}/${data[i].id}?access_token=${accessToken}`, data[i].id,
            ),
          );
        }
        return Promise.all(arr);
      })
      .then((data) => {
        this.setState(prevState => ({
          mailData: [...prevState.mailData, ...data],
          loading: false,
        }));
      })
      .catch(() => this.setState({ error: true }));
  }

  handleButtons = (btn) => {
    const {
      page, pageToken, token, email, search, endMail, messages,
    } = this.state;
    if (endMail && page + 1 >= Math.ceil(messages.length / 4)) {
      this.setState({ disableBtnNext: true });
    }
    if (btn === 'next') {
      if (page === pageToken.length * 2) this.getList(email, `pageToken=${pageToken[pageToken.length - 1]}`, token, search);
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
    if (btn === 'previous' && page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
        disableBtnNext: false,
      }));
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSearch = (event) => {
    event.preventDefault();
    const {
      email, value, token,
    } = this.state;
    this.setState({
      messages: [],
      pageToken: [],
      page: 1,
      mailData: [],
      search: value,
      endMail: false,
      disableBtnNext: false,
      deleted: [],
    });
    this.getList(email, 'pageToken=', token, value);
  }

  handleTypeEmail = (type) => {
    const {
      email, token,
    } = this.state;
    this.setState({
      messages: [],
      pageToken: [],
      page: 1,
      mailData: [],
      value: type,
      search: type,
      endMail: false,
      disableBtnNext: false,
    });
    this.getList(email, 'pageToken=', token, type);
  }

  handleSelectEmail = (event) => {
    const { deleted } = this.state;
    const arr = deleted;
    const { id, checked } = event.target;
    console.log(checked);
    console.log(id);
    if (checked) arr.push(id);
    else arr.splice(arr.indexOf(id), 1);
    this.setState({ deleted: arr });
  }

  handleDelete = (event) => {
    event.preventDefault();
    console.log('click');
    const {
      deleted, email, token, search,
    } = this.state;
    deleteMail(deleted, email, token)
      .then(data => { this.getList(email, 'pageToken=', token, search); return null; })
      .catch(() => this.setState({ error: true }));
    this.setState({
      messages: [],
      pageToken: [],
      page: 1,
      mailData: [],
      deleted: [],
      endMail: false,
      disableBtnNext: false,
    });
  }

  render() {
    const {
      token, mailData, page, value, disableBtnNext, imageUrl, name, loading, error,
    } = this.state;
    const mailArr = mailData.slice(4 * (page - 1), 4 * page);
    console.log(this.state);
    if (token) {
      return (
        <div className="wrapper">
          <Header imageUrl={imageUrl} name={name} />
          <Navbar />
          <main className="container main">
            <Submenu handleTypeEmail={this.handleTypeEmail} />
            <section className="mainSection">
              <PageTitle />
              <SearchRow
                value={value}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                handleDelele={this.handleDelete}
              />
              <section className="postsContainer">
                {error && <h1 className="error-message">Something is wrong! Reload the page!</h1>}
                {(!loading && !error) && mailArr.map((item, index) => {
                  const key = `media-${index}`;
                  return (
                    <Media
                      key={key}
                      mailData={item}
                      handleSelectEmail={this.handleSelectEmail}
                    />
                  );
                })}
                {(loading && !error) && <Loader />}
              </section>
              <Buttons
                handleButtons={this.handleButtons}
                disableBtnNext={disableBtnNext}
              />
              <Footer />
            </section>
          </main>
        </div>
      );
    }

    return (
      <GoogleLogin
        clientId="75453322041-pn5dhuulkpmuhlmu4o5o46n5svpqj6bm.apps.googleusercontent.com"
        className="google-login"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy="single_host_origin"
      />
    );
  }
}

export default App;
