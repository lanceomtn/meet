import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

import './App.css';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = async (location, numberOfEvents) => {
		getEvents().then(events => {
			const locationEvents =
				location === 'all'
					? events
					: events.filter(event => event.location === location);
			if (this.mounted) {
				this.setState({
					events: locationEvents.slice(0, this.state.numberOfEvents),
					currentLocation: location,
				});
			}
		});
	};

  render() {
    return (
      <Container className="app-container" fluid>
        <Row>
          <Col>
            <div className="App">
              <CitySearch 
                locations={this.state.locations}
                updateEvents={this.updateEvents} />
              <EventList 
                events={this.state.events}
                numberOfEvents={this.state.numberOfEvents} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;