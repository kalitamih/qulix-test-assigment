const deleteMail = (id, user) => {
  const lnk = `https://www.googleapis.com/gmail/v1/users/${user}/messages/${id}`;
  return fetch(lnk, { method: 'DELETE' })
    .then(res => res.json())
    .then(res => res);
};

export default deleteMail;
