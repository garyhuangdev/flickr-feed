import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'react-bootstrap';
import FeedCard from './FeedCard';

describe('test FeedCard component', () => {
  test('check render correct', () => {
    const wrapper = shallow(
      <FeedCard
        title={'title'}
        src={'src'}
        author={'author'}
        date_taken={'date'}
        link={'link'}
        tags={'tags'}
      />
    );
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
