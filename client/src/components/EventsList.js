import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import { Link } from 'react-router-dom';

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
  renderEvents(event) {
    const events = Array.from(this.props.events);
    console.log('what events', events);
    for (let i = 0, l = events.length; i < l; i++) {
      console.log(events[i]);
    }
  }

  render() {
    console.log('this.props.events', this.props.events);
    const events = Array.from(this.props.events);
    console.log('events', events);

    return (
      <div>
        <h2>Events List</h2>

        <div>
          {!events && 'Loading...'}
          {events && (
            <ul>
              {events.map(event => {
                this.renderEvents();
              })}
            </ul>
          )}
        </div>
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
