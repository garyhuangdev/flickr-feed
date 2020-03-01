import React from 'react';
import { shallow } from 'enzyme';
import DisplayArea from './DisplayArea';
import FeedList from '../FeedList';
import Alert from '../Alert';
import Loader from '../Loader';

describe('test DisplayArea component', () => {
  test('render Alert based on props', () => {
    const wrapper = shallow(
      <DisplayArea
        feeds={['data']}
        loading={false}
        error={null}
        searchString=""
      />
    );
    expect(wrapper.find(Alert)).toHaveLength(1);
  });
  test('render FeedCard based on props', () => {
    const wrapper = shallow(
      <DisplayArea
        feeds={['data']}
        loading={false}
        error={null}
        searchString="test"
      />
    );
    expect(wrapper.find(FeedList)).toHaveLength(1);
  });
  test('render Loader based on props', () => {
    const wrapper = shallow(
      <DisplayArea
        feeds={['data']}
        loading={true}
        error={null}
        searchString="test"
      />
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
