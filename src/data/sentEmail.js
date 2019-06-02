import { GMAIL_ADDR } from '../constants';

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
  });
};

export default sentEmail;
