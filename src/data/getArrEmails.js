import convert from './convert';
import { handleErrors } from '.';

const handleEmail = (url, id) => (
  fetch(url)
    .then(response => handleErrors(response))
    .then(data => data.json())
    .then((data) => {
      const obj = {};
      data.payload.headers.filter((item) => {
        if (item.name === 'From' || item.name === 'Subject') {
          obj[item.name] = item.value;
          return true;
        }
        if (item.name === 'Date') {
          obj[item.name] = item.value.slice(0, 25);
          return true;
        }
        return false;
      });
      obj.snippet = convert(data.snippet);
      obj.tag = data.labelIds;
      obj.id = id;
      return obj;
    }));

const getArrEmails = (data, token, request) => {
  const arr = [];
  for (let i = 0; i < data.length; i += 1) {
    arr.push(
      handleEmail(
        `${request}/${data[i].id}?access_token=${token}`, data[i].id,
      ),
    );
  }
  return arr;
};

export default getArrEmails;
