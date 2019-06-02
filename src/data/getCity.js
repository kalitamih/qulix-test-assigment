import { handleErrors } from '.';
import { LINK_CITY } from '../constants';

const getCity = () => (
  fetch(LINK_CITY)
    .then(response => handleErrors(response))
    .then(data => data.json())
);

export default getCity;
