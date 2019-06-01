const deleteMail = (arrId, user, token) => {
  const lnk = `https://www.googleapis.com/gmail/v1/users/${user}/messages/`;
  console.log(arrId);
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
