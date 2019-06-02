import { GMAIL_ADDR } from '../constants';

const deleteMail = (arrId, user, token) => {
  const lnk = `${GMAIL_ADDR}${user}/messages/`;
  const arrReq = [];
  for (let i = 0; i < arrId.length; i += 1) {
    console.log(`${lnk}${arrId[i]}?access_token=${token}`);
    arrReq.push(
      fetch(`${lnk}${arrId[i]}?access_token=${token}`,
        { method: 'DELETE' }),
    );
  }
  return Promise.all(arrReq);
};

export default deleteMail;
