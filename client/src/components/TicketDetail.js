import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneTicket } from '../actions/tickets';
import { fetchComments } from '../actions/comments';
import { fetchOneEvent } from '../actions/events';
import { Link } from 'react-router-dom';
import CommentsForm from './CommentsForm';
import moment from 'moment-business-time';
import { removeTicket } from '../actions/tickets';
import { getTicketLength } from '../actions/tickets';

class TicketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { ticket: {}, comments: [], events: {} };
    this.renderComments = this.renderComments.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const ticketsId = this.props.match.params.ticketsId;

    this.props.fetchOneTicket(id, ticketsId);
    this.props.fetchComments(id, ticketsId);
    this.props.fetchOneEvent(id);
    this.props.getTicketLength(id);

    this.setState({ tickets: {}, comments: [], events: {} });
  }

  ticketRisk = () => {
    console.log('for risk', this.props.ticket, 'this.props', this.props);
    console.log('createdAt', this.props.ticket.createdAt);
    const createAt = this.props.ticket.createdAt;
    //moment('2015-02-27T15:00:00').isWorkingTime();

    const price = this.props.ticket.price;

    //var avr = scores.reduce((total, score) => total + score) / scores.length;
    // const avrP = prices.reduce((total, price) => total + price) / prices.length;

    let risk = 0;

    //time risk
    if (moment(createAt).isWorkingTime()) {
      risk -= 10;
    }

    if (!moment(createAt).isWorkingTime()) {
      risk += 10;
    }

    //TO DO
    //price risk
    //i need length
    //i need total sum of prices
    //then use reduce get average
    //then make function

    //min and max
    if (risk < 5) {
      return 5;
    } else if (risk > 95) {
      return 95;
    } else {
      return risk;
    }
  };

  renderComments = () => {
    const comments2 = Array.from(this.props.comments.comment);
    console.log('is this comments?', comments2);

    return comments2.map(comment => {
      return (
        <div>
          <h5>
            {comment.author} said : {comment.text}
          </h5>
        </div>
      );
    });
  };

  handleDelete() {
    const id = this.props.ticket.eventsId;
    const ticketsId = this.props.ticket.id;
    this.props.removeTicket(id, ticketsId);
  }

  render() {
    console.log('this.props', this.props);
    console.log('this.props.match', this.props.match);
    console.log('this.props.ticket', this.props.ticket);
    const ticket = this.props.ticket;
    const comments = this.props.comments.comment;

    return (
      <div>
        <div>
          <h2>Ticket Detail</h2>
          <h3>{ticket.title}</h3>
          <h4>RISK: {ticket && this.ticketRisk()} %</h4>
          <img src={ticket.picture} />
          <h4>EUR{ticket.price}</h4>
          <h5>{ticket.description}</h5>
          <button>Buy this ticket</button>
          <button onClick={e => this.handleDelete(e)}>DELETE</button>
        </div>
        <div>
          {!comments && 'Loading...'}
          {comments && this.renderComments()}
        </div>

        <CommentsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    ticket: state.tickets,
    comments: state.comments,
    events: state.events
  };
};

const mapDispatchToProps = {
  fetchOneTicket,
  fetchComments,
  fetchOneEvent,
  removeTicket,
  getTicketLength
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetail);
