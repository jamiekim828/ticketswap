import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import { Link } from 'react-router-dom';

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
      // currentPage: 1
    };
  }

  // handlePageChange = (page, e) => {
  //   this.setState({
  //     currentPage: page
  //   });
  // };

  componentDidMount() {
    this.props.fetchEvents();

    this.setState();
  }

  page(e, previous) {
    console.log('page.props.events', this.props.events);
    if (previous) {
      this.props.fetchEvents(this.props.events.topId, previous);
    } else {
      this.props.fetchEvents(this.props.events.bottomId, previous);
    }
  }

  render() {
    const events = Array.from(this.props.events);

    const items = events.map(event => (
      <Link to={`/events/${event.id}`}>
        <div>
          <h4 className='eventname'>{event.name}</h4>
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
          <button onClick={e => this.page(e, true)}>Previous</button>
          <button onClick={e => this.page(e, false)}>Next</button>
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
