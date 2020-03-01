import fetchJsonp from 'fetch-jsonp';
import { FLICKR_URL } from '../config/config';

export const fetchFlickr = tags => {
  return fetchJsonp(`${FLICKR_URL}&tags=${tags}`, {
    jsonpCallback: 'jsoncallback',
    timeout: 3000
  })
    .then(response => response.json())
    .then(res => res.items)
    .catch(error => {
      console.error('Error occurred while fetching Photos');
    });
};
