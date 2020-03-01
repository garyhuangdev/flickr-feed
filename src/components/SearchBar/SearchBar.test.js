import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

describe('test SearchBar component', () => {
  test('render Alert based on props', () => {
    const wrapper = shallow(
      <SearchBar searchString={' '} handleInputChange={() => {}} />
    );
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Form)).toHaveLength(1);
    expect(wrapper.find(FormControl)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
