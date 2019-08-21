import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
    // this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.setState();
  }
  // renderEvents() {
  //   const events = Array.from(this.props.events);
  //   console.log('what events', events);
  // for (let i = 0, l = events.length; i < l; i++) {
  //   console.log(events[i]);
  //   return <Link to={`/events/${events[i].id}`}>{events[i].name}</Link>;
  // }
  //}

  render() {
    const events = Array.from(this.props.events);
    console.log('events', events);

    const items = events.map(event => (
      <Link to={`/events/${event.id}`}>{event.name}</Link>
    ));

    return (
      <div>
        <h2>Events List</h2>

        <div>
          {!events && 'Loading...'}
          {events && <ul>{items}</ul>}
        </div>
        <Button>More Events</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = { fetchEvents };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
