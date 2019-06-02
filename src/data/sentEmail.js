import { GMAIL_ADDR } from '../constants';
import { handleErrors } from '.';

const sentEmail = (raw, user, token) => {
  const lnk = `${GMAIL_ADDR}${user}/messages/send?access_token=${token}`;
  const method = 'POST';
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({ raw });

  return fetch(lnk, {
    method,
    headers,
    body,
  })
    .then(response => handleErrors(response));
};

export default sentEmail;
