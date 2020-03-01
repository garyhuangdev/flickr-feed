import { fetchFlickr } from './fetchFlickr';
import fetchJsonp from 'fetch-jsonp';
import mockData from './mockData';

jest.mock('fetch-jsonp');

fetchJsonp.mockImplementation(() => Promise.resolve({ json: () => mockData }));

describe('Flickr API service', () => {
  test('search feeds by tags', () => {
    fetchFlickr('hat');

    expect(
      fetchJsonp
    ).toHaveBeenCalledWith(
      'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=hat',
      { jsonpCallback: 'jsoncallback', timeout: 3000 }
    );
  });
});
