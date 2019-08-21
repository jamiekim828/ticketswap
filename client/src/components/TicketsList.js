import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../actions/tickets';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class TicketsList extends Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }

  renderTickets = () => {
    const tickets = Array.from(this.props.tickets);
    return tickets.map(ticket => {
      return (
        <div>
          <Link to={`/events/${ticket.events_id}/ticket/${ticket.id}`}>
            <div>
              <p>{ticket.title}</p>
              <p>{ticket.price}</p>
              <p>{ticket.description}</p>
            </div>
          </Link>
        </div>
      );
    });
  };

  render() {
    const tickets = Array.from(this.props.tickets);
    console.log('tickets', tickets);

    return (
      <div>
        <h3>Tickets</h3>
        {!tickets && 'Loading...'}
        {tickets && <ul>{this.renderTickets()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = { fetchTickets };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsList);
