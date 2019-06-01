import convert from './convert';

const handleEmail = (url, id) => (
  fetch(url)
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

export default handleEmail;
