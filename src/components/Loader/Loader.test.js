import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';
import { HashLoader } from 'react-spinners';

describe('test Loader component', () => {
  test('check render correct', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(HashLoader)).toHaveLength(1);
  });
});
