import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneTicket } from '../actions/tickets';
import { fetchComments } from '../actions/comments';
import { Link } from 'react-router-dom';
import CommentsForm from './CommentsForm';

class TicketDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { ticket: {}, comments: [] };
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const ticketsId = this.props.match.params.ticketsId;
    // this.props.fetchOneEvent({ id });
    this.props.fetchOneTicket(id, ticketsId);
    this.props.fetchComments(id, ticketsId);

    this.setState({ tickets: {}, comments: [] });
  }

  renderComments = () => {
    const comments = this.props.comments.comment;
    console.log('is this comments?', comments);

    return comments.map(comment => {
      return (
        <div>
          <h5>{comment.text}</h5>
        </div>
      );
    });
  };

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
          <img src={ticket.picture} />
          <h4>{ticket.price}</h4>
          <h5>{ticket.description}</h5>
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
  return {
    ticket: state.tickets,
    comments: state.comments
  };
};

const mapDispatchToProps = { fetchOneTicket, fetchComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetail);
