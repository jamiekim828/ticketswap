import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneEvent } from '../actions/events';
import { Link } from 'react-router-dom';
import TicketsList from './TicketsList';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
    this.renderEvent = this.renderEvent.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOneEvent(id);

    this.setState();
  }

  renderEvent() {
    const event = this.props.event;
    return (
      <div>
        <h3>{event.name}</h3>
        <h4>{event.description}</h4>
        <h5>Start: {event.startdate}</h5>
        <h5>End: {event.enddate}</h5>
      </div>
    );
  }

  render() {
    const event = this.props.event;
    console.log('this.props.event', this.props.event);
    return (
      <div>
        <div>
          {!event && 'Loading'}
          {event && this.renderEvent()}
        </div>
        <div>
          <TicketsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.events
  };
};

const mapDispatchToProps = { fetchOneEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
