import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveTicket } from '../actions/tickets';

class TicketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets_form: { title: '', picture: '', price: '', description: '' }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState();
  }

  onChange(e) {
    this.state.tickets_form[e.target.name] = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.saveTicket(this.props.event.id, this.state.tickets_form);
  }

  render() {
    console.log('hello props', this.props);
    const tickets = this.props;
    return (
      <div>
        <h1 className='text-primary'>Upload Ticket!</h1>
        <p className='lead'>
          <i className='ticketform' />
          Supply all informations below
        </p>
        <form className='form'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Title'
              name='title'
              value={tickets.title}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='picture'
              placeholder='Image URL'
              name='picture'
              value={tickets.picture}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='price'
              placeholder='Price'
              name='price'
              value={tickets.price}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='description'
              placeholder='Description'
              name='description'
              value={tickets.description}
              onChange={e => this.onChange(e)}
            />
          </div>

          <input
            type='button'
            className='btn-primary'
            value='Upload Ticket'
            onClick={e => this.onSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Ticket form state', state);
  return {
    tickets_form: state.tickets_form
  };
};

const mapDispatchToProps = {
  saveTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketForm);
