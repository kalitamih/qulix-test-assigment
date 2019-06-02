import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Wrapper from './components/wrapper';
import getArrEmails from './data/getArrEmails';
import deleteMail from './data/deleteMail';
import {
  GMAIL_ADDR, CHUNK, MAX_RES, CLIENT_ID,
} from './constants';

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
    modalWindow: false,
  }

  resetState = (value, search) => {
    this.setState({
      messages: [],
      pageToken: [],
      page: 1,
      mailData: [],
      value,
      search,
      endMail: false,
      disableBtnNext: false,
      deleted: [],
      modalWindow: false,
    });
  }

  responseGoogle = (response) => {
    const { accessToken, profileObj } = response;
    const { email, name, imageUrl } = profileObj;
    const { search } = this.state;
    this.setState({
      token: accessToken,
      email,
      name,
      imageUrl,
    });
    this.getList(email, 'pageToken=', accessToken, search);
  }

  disableNextBtn = (inc) => {
    const { page, endMail, messages } = this.state;

    if (endMail && page + inc >= Math.ceil(messages.length / CHUNK)) {
      this.setState({ disableBtnNext: true });
    }
  }

  getList = (email, nextPage, token, filter) => {
    const request = `${GMAIL_ADDR}${email}/messages`;
    const reqListMail = `${request}?${MAX_RES}&${nextPage}&access_token=${token}&q=${filter}`;
    const { messages, pageToken } = this.state;

    this.setState({
      loading: true,
      error: false,
    });

    fetch(reqListMail)
      .then(body => body.json())
      .then((data) => {
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
        this.disableNextBtn(0);
        return Promise.all(getArrEmails(data, token, request));
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
      page, pageToken, token, email, search,
    } = this.state;
    this.disableNextBtn(1);

    if (btn === 'next') {
      if (page === pageToken.length * 2) {
        this.getList(
          email,
          `pageToken=${pageToken[pageToken.length - 1]}`,
          token,
          search,
        );
      }
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
    this.resetState(value, value);
    this.getList(email, 'pageToken=', token, value);
  }

  handleTypeEmail = (type) => {
    const {
      email, token,
    } = this.state;
    this.resetState(type, type);
    this.getList(email, 'pageToken=', token, type);
  }

  handleSelectEmail = (event) => {
    const { deleted } = this.state;
    const arr = deleted;
    const { id, checked } = event.target;

    if (checked) arr.push(id);
    else arr.splice(arr.indexOf(id), 1);

    this.setState({ deleted: arr });
  }

  handleDelete = (event) => {
    event.preventDefault();
    const {
      deleted, email, token, search, value,
    } = this.state;
    deleteMail(deleted, email, token)
      .then(() => { this.getList(email, 'pageToken=', token, search); return null; })
      .catch(() => this.setState({ error: true }));
    this.resetState(value, search);
  }

  handleWindow = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (event.target.id.slice(0, 7) === 'newItem') this.setState({ modalWindow: true });
    else this.setState({ modalWindow: false });
  }

  render() {
    const {
      token, mailData, page,
      value, disableBtnNext, imageUrl,
      name, loading, error,
      modalWindow,
    } = this.state;
    const mailArr = mailData.slice(CHUNK * (page - 1), CHUNK * page);
    if (token) {
      return (
        <Wrapper
          mailArr={mailArr}
          value={value}
          error={error}
          loading={loading}
          disableBtnNext={disableBtnNext}
          imageUrl={imageUrl}
          name={name}
          handleTypeEmail={this.handleTypeEmail}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleDelele={this.handleDelete}
          handleSelectEmail={this.handleSelectEmail}
          handleButtons={this.handleButtons}
          handleDelete={this.handleDelete}
          modalWindow={modalWindow}
          handleWindow={this.handleWindow}
        />
      );
    }

    return (
      <GoogleLogin
        clientId={CLIENT_ID}
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
