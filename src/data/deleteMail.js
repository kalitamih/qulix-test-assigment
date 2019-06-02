import { GMAIL_ADDR } from '../constants';
import { handleErrors } from '.';

const deleteMail = (arrId, user, token) => {
  const lnk = `${GMAIL_ADDR}${user}/messages/`;
  const arrReq = [];
  for (let i = 0; i < arrId.length; i += 1) {
    arrReq.push(
      fetch(`${lnk}${arrId[i]}?access_token=${token}`,
        { method: 'DELETE' })
        .then(response => handleErrors(response)),
    );
  }
  return Promise.all(arrReq);
};

export default deleteMail;
