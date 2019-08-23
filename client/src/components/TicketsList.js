import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../actions/tickets';
import { Link } from 'react-router-dom';

class TicketsList extends Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }

  // totalTicketPrice = () => {
  //   const allTickets = this.props.tickets;
  //   const allTicketsPrice = allTickets.price;
  //   let l = allTickets.length;
  //   let total = 0;

  //   for (let i = 0; i < l; i++) {
  //     total += allTickets[i].price;
  //   }
  //   return total;
  // };

  renderTickets = () => {
    const tickets = Array.from(this.props.tickets);
    console.log('this,props', this.props);
    return tickets.map(ticket => {
      return (
        <div>
          <Link to={`/events/${ticket.eventsId}/ticket/${ticket.id}`}>
            <div>
              <p>
                <b>Title: {ticket.title}</b>
              </p>
              <p>{ticket.price} EUR</p>
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
