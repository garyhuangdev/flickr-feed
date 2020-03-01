import React from 'react';
import { shallow } from 'enzyme';
import FeedCard from './FeedCard';
import FeedLayout from './FeedLayout';

describe('test FeedLayout component', () => {
  test('render one <FeedCard /> per feed', () => {
    const feeds = [
      { title: 'Feed 1', link: 'http://example.com/feed1' },
      { title: 'Feed 2', link: 'http://example.com/feed2' }
    ];

    const wrapper = shallow(<FeedLayout feeds={feeds} />);
    expect(wrapper.find(FeedCard)).toHaveLength(2);
  });
});
