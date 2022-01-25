import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';
import EventList from '../EventList';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  test('Event details are collapsed by default', ({ given, when, then }) => {
    
    given('the user is on the main page', () => {
      
    });

    let AppWrapper;
    when('the list of upcoming events is displayed', () => {
      AppWrapper = shallow(<EventList events={mockData} />);
      expect(AppWrapper.find('.EventList')).toHaveLength(1);
    });
    
    then('the event details are collapsed by default', () => {
      AppWrapper = shallow(<Event event={mockData[0]} />);
      expect(AppWrapper.state('collapsed')).toEqual(true);
    });
  });

  test('User can expand the event box to display details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user is on the main page and the list of events is displayed', () => {
      AppWrapper = shallow(<Event event={mockData[0]} />);

    });

    when('the user clicks on the show details button', () => {
      const showDetails = AppWrapper.find('.show-details');
      showDetails.simulate('click');
    });

    then('the event box expands to show more details for the event', () => {
      expect(AppWrapper.state('collapsed')).toEqual(false);
    });
  });

  test('User can collapse the event box to hide details', ({ given, when, then }) => {
    given('the user has expanded the event box to see more details', () => {

    });

    let AppWrapper
    when('the user clicks the hide details button', () => {
      AppWrapper = shallow(<Event event={mockData[0]} />);
      AppWrapper.setState({ collapsed: false});
      AppWrapper.find('.hide-details').simulate('click');
    });

    then('the event box collapses to hide the additional details', () => {
      expect(AppWrapper.state('collapsed')).toEqual(true);
    });
  });

});