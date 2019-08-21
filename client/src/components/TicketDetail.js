import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchOneEvent } from '../actions/events';
import { fetchOneTicket } from '../actions/tickets';
import { Link } from 'react-router-dom';

class TicketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { ticket: {} };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const ticketsId = this.props.match.params.ticketsId;
    // this.props.fetchOneEvent({ id });
    this.props.fetchOneTicket(id, ticketsId);

    this.setState();
  }

  render() {
    console.log('this.props.match', this.props.match);
    console.log('this.props.ticket', this.props.ticket);
    const ticket = this.props.ticket;

    return (
      <div>
        <h2>Ticket Detail</h2>
        <h3>{ticket.title}</h3>
        <img src={ticket.picture} />
        <h4>{ticket.price}</h4>
        <h5>{ticket.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.tickets
  };
};

const mapDispatchToProps = { fetchOneTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetail);
