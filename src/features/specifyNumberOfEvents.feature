Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the user has opened the app or selected a city
When the user does not specify the number of events to display
Then the number of events displayed should be 32

Scenario: User can change the number of events they want to see. 
Given the user opened the app or selected a city
When the user does specify the number of events to display
Then number of events displayed should equal the number requested