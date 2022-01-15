import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('Summary is displayed', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('Location is displayed', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('Date and time are displayed', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('Show details button is rendered', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('Event details are collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('Clicking on show details button expands details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('Clicking on hide details button collapses details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

});