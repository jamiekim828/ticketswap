import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneEvent } from '../actions/events';
import { Link } from 'react-router-dom';

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { event: null };
  }

  componentDidMount() {
    this.props.fetchOneEvent();
    this.setState();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

const mapDispatchToProps = { fetchOneEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
