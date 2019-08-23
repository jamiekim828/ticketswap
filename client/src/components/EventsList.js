import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import { Link } from 'react-router-dom';

const LIMIT = 9;

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      currentOffset: 0,
      limit: 9
    };
  }

  // handlePageChange = (page, e) => {
  //   this.setState({
  //     currentPage: page
  //   });
  // };

  componentDidMount() {
    this.page(0);

    this.setState();
  }

  page(offset) {
    console.log(
      'this.state.currentOffset ',
      this.state.currentOffset,
      ', offset ',
      offset
    );
    this.state.currentOffset = offset;
    this.props.fetchEvents(offset, LIMIT);
  }

  render() {
    const events = Array.from(this.props.events);

    const items = events.map(event => (
      <Link to={`/events/${event.id}`}>
        <div>
          <h4 className='eventname'>
            <b>{event.name}</b>
          </h4>
          <h5 className='startdate'>Start:{event.startdate}</h5>
          <h5 className='enddate'>End:{event.enddate}</h5>
        </div>
      </Link>
    ));

    return (
      <div>
        <h2 className='eventspage'>Events List</h2>

        <div>
          {!events && 'Loading...'}
          {events && <ul>{items}</ul>}
        </div>

        <div>
          <button onClick={e => this.page(this.state.currentOffset - LIMIT)}>
            Previous
          </button>
          <button onClick={e => this.page(this.state.currentOffset + LIMIT)}>
            Next
          </button>
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
