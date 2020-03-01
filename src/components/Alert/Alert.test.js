import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';
import { Alert as Warning } from 'react-bootstrap';

describe('test Alert component', () => {
  test('check render correct', () => {
    const wrapper = shallow(
      <Alert
        alertHeading={'header'}
        alertContent={'content'}
        variant={'variant'}
      />
    );
    expect(wrapper.find(Warning)).toHaveLength(1);
    expect(wrapper.find(Warning.Heading)).toHaveLength(1);
  });
});
