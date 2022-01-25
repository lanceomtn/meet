Feature: Show or hide and events details

Scenario: Event details are collapsed by default
  Given the user is on the main page
  When the list of upcoming events is displayed
  Then the event details are collapsed by default

Scenario: User can expand the event box to display details
  Given the user is on the main page and the list of events is displayed
  When the user clicks on the show details button
  Then the event box expands to show more details for the event

Scenario: User can collapse the event box to hide details
  Given the user has expanded the event box to see more details
  When the user clicks the hide details button
  Then the event box collapses to hide the additional details 