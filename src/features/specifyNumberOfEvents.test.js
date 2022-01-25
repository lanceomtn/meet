import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from 'enzyme';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    given('the user has opened the app or selected a city', () => {

    });

    when('the user does not specify the number of events to display', () => {

    });

    let AppWrapper;
    then('the number of events displayed should be 32', () => {
      AppWrapper = shallow(<NumberOfEvents />);
      expect(AppWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    given('the user opened the app or selected a city', () => {

    });

    let AppWrapper
    when('the user does specify the number of events to display', () => {
      AppWrapper = shallow (<NumberOfEvents />);
      AppWrapper.setState({ numberOfEvents: 10 });
    });

    then('number of events displayed should equal the number requested', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(10);
    });
  });

});