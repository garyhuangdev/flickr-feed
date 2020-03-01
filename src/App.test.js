import React from 'react';
import App from './App';
import SearchBar from './components/SearchBar';
import DisplayArea from './components/DisplayArea';
import { shallow } from 'enzyme';

describe('test App component', () => {
  test('check render correct', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
    expect(wrapper.find(DisplayArea)).toHaveLength(1);
  });
});
