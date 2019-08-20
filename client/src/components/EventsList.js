import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';

const EventsList = props => {
  return <div>Events</div>;
};

EventsList.propTypes = {
  fetchEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
